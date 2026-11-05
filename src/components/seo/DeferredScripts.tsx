"use client";

import { useEffect } from "react";

const GA_ID = "G-JZHHWJ6J4G";
const ADSENSE_CLIENT = "ca-pub-6650426189914940";

function inject(src: string, attrs: Record<string, string> = {}) {
  if (document.querySelector(`script[src="${src}"]`)) return;
  const s = document.createElement("script");
  s.src = src;
  s.async = true;
  for (const [k, v] of Object.entries(attrs)) s.setAttribute(k, v);
  document.head.appendChild(s);
}

function loadAnalytics() {
  const w = window as unknown as { dataLayer: unknown[]; gtag?: (...a: unknown[]) => void };
  w.dataLayer = w.dataLayer || [];
  w.gtag = function () {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer.push(arguments);
  };
  w.gtag("js", new Date());
  w.gtag("config", GA_ID);
  inject(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`);
}

/**
 * Third-party scripts (analytics + ads) are heavy and not needed for first paint or first input.
 * Analytics loads after the page is idle (or on the first interaction); AdSense waits for the first
 * interaction (or 12s) so neither can delay LCP or add main-thread work during interaction.
 */
export function DeferredScripts() {
  useEffect(() => {
    let analyticsDone = false;
    let adsDone = false;
    const timers: number[] = [];

    const startAnalytics = () => {
      if (analyticsDone) return;
      analyticsDone = true;
      loadAnalytics();
    };
    const startAds = () => {
      if (adsDone) return;
      adsDone = true;
      inject(`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`, {
        crossorigin: "anonymous",
      });
    };

    const events = ["pointerdown", "keydown", "scroll", "touchstart"] as const;
    const onInteract = () => {
      startAnalytics();
      // Ads a moment after the first interaction so the interaction itself stays fast
      timers.push(window.setTimeout(startAds, 1500));
      events.forEach((e) => window.removeEventListener(e, onInteract));
    };
    events.forEach((e) => window.addEventListener(e, onInteract, { passive: true, once: false }));

    // Fallbacks: analytics after 5s idle, ads after 12s, even without interaction
    const idle = (cb: () => void) =>
      "requestIdleCallback" in window
        ? (window as unknown as { requestIdleCallback: (f: () => void) => void }).requestIdleCallback(cb)
        : cb();
    timers.push(window.setTimeout(() => idle(startAnalytics), 5000));
    timers.push(window.setTimeout(() => idle(startAds), 12000));

    return () => {
      timers.forEach(clearTimeout);
      events.forEach((e) => window.removeEventListener(e, onInteract));
    };
  }, []);

  return null;
}
