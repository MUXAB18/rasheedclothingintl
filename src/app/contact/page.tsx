"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { companyData } from "@/data/company";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import emailjs from "@emailjs/browser";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input/min";
import "react-phone-number-input/style.css";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const subject = params.get("subject");
      const message = params.get("message");

      if (subject || message) {
        setFormData((prev) => ({
          ...prev,
          subject: subject || prev.subject,
          message: message || prev.message,
        }));
      }
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.phone && !isValidPhoneNumber(formData.phone)) {
      alert("Please enter a valid phone number including your country code.");
      return;
    }

    setFormStatus("submitting");
    try {
      // 1. Send emails using EmailJS
      const serviceId = "service_8rutxkg";
      const adminTemplateId = "template_z3hi3hj";
      const customerTemplateId = "template_4pfa2ea";
      const publicKey = "9U-BFk_8Du4GSjC2B";

      const adminEmailData = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        reply_to: formData.email,
        phone: formData.phone || "Not provided",
        enquiry_type: "General Enquiry",
        subject: formData.subject || "No Subject",
        message: formData.message,
      };

      const customerEmailData = {
        to_email: formData.email,
        from_name: `${formData.firstName} ${formData.lastName}`,
        phone: formData.phone || "Not provided",
        enquiry_type: "General Enquiry",
        subject: formData.subject || "No Subject",
        message: formData.message,
      };

      await emailjs.send(serviceId, adminTemplateId, adminEmailData, publicKey);
      await emailjs.send(
        serviceId,
        customerTemplateId,
        customerEmailData,
        publicKey,
      );

      // 2. Save to Database
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setFormStatus("success");
      window.location.href = "/thank-you";
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Email send failed:", error);
      setFormStatus("error");
    }
  };

  return (
    <div className="pt-32 md:pt-40 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          as="h1"
          eyebrow="Get in Touch"
          title="Contact Our Clothing Factory in Sialkot"
          subtitle="Reach out to discuss your manufacturing requirements, request samples, or ask for a quote."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-12"
          >
            <div>
              <h2 className="text-3xl font-sans font-bold tracking-tight mb-10">
                Contact Information
              </h2>
              <div className="space-y-10">
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#F8F8F8] flex items-center justify-center shrink-0 border border-gray-100 group-hover:bg-black group-hover:border-black transition-colors duration-300 shadow-sm">
                    <MapPin className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-[11px] font-sans font-bold tracking-[2px] uppercase text-gray-400 mb-2">
                      Headquarters
                    </h3>
                    <p className="font-sans font-bold text-lg text-near-black mb-1">
                      Address
                    </p>
                    <p className="font-sans text-gray-500 leading-relaxed">
                      {companyData.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#F8F8F8] flex items-center justify-center shrink-0 border border-gray-100 group-hover:bg-black group-hover:border-black transition-colors duration-300 shadow-sm">
                    <Phone className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-[11px] font-sans font-bold tracking-[2px] uppercase text-gray-400 mb-2">
                      Phone / WhatsApp
                    </h3>
                    <div className="space-y-1">
                      {companyData.phones.map((phone) => (
                        <p
                          key={phone.country}
                          className="font-sans text-near-black"
                        >
                          <span className="font-bold">{phone.country}:</span>{" "}
                          <a
                            href={`tel:${phone.code}`}
                            className="text-gray-500 hover:text-black hover:underline transition-colors"
                          >
                            {phone.number}
                          </a>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#F8F8F8] flex items-center justify-center shrink-0 border border-gray-100 group-hover:bg-black group-hover:border-black transition-colors duration-300 shadow-sm">
                    <Mail className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-[11px] font-sans font-bold tracking-[2px] uppercase text-gray-400 mb-2">
                      Email Address
                    </h3>
                    <p className="font-sans font-bold text-lg text-near-black">
                      <a
                        href={`mailto:${companyData.emails.primary}`}
                        className="hover:underline hover:text-black transition-colors"
                      >
                        {companyData.emails.primary}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#F8F8F8] flex items-center justify-center shrink-0 border border-gray-100 group-hover:bg-black group-hover:border-black transition-colors duration-300 shadow-sm">
                    <Clock className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-[11px] font-sans font-bold tracking-[2px] uppercase text-gray-400 mb-2">
                      Business Hours
                    </h3>
                    <p className="font-sans font-bold text-near-black mb-1">
                      Monday - Saturday
                    </p>
                    <p className="font-sans text-gray-500">
                      9:00 AM - 7:00 PM (PKT)
                    </p>
                    <p className="font-sans text-xs font-bold text-green-600 mt-2">
                      We reply to every enquiry within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-black via-gray-600 to-black"></div>

            <h2 className="text-2xl font-sans font-bold tracking-tight mb-8">
              Send us a message
            </h2>

            {formStatus === "success" ? (
              <div className="bg-green-50 text-green-800 p-8 rounded-2xl flex flex-col items-center text-center font-sans">
                <CheckCircle2 className="w-12 h-12 mb-4 text-green-500" />
                <h3 className="text-xl font-bold mb-2">
                  Message Sent Successfully
                </h3>
                <p className="text-sm">
                  Thank you for reaching out. One of our manufacturing experts
                  will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="mt-6 text-sm font-bold underline"
                >
                  Send another message
                </button>
              </div>
            ) : formStatus === "error" ? (
              <div className="bg-red-50 text-red-800 p-8 rounded-2xl flex flex-col items-center text-center font-sans">
                <h3 className="text-xl font-bold mb-2">Something went wrong</h3>
                <p className="text-sm">
                  Please try again or email us directly.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="mt-6 text-sm font-bold underline"
                >
                  Try again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 group">
                    <label
                      htmlFor="firstName"
                      className="text-[10px] font-bold tracking-[2px] uppercase text-gray-500 group-focus-within:text-black transition-colors"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-[#F8F8F8] border border-gray-100 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-4 focus:ring-black/5 focus:bg-white focus:border-black transition-all shadow-sm"
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label
                      htmlFor="lastName"
                      className="text-[10px] font-bold tracking-[2px] uppercase text-gray-500 group-focus-within:text-black transition-colors"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-[#F8F8F8] border border-gray-100 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-4 focus:ring-black/5 focus:bg-white focus:border-black transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2 group">
                  <label
                    htmlFor="phone"
                    className="text-[10px] font-bold tracking-[2px] uppercase text-gray-500 group-focus-within:text-black transition-colors"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <PhoneInput
                      international
                      defaultCountry="US"
                      value={formData.phone || undefined}
                      onChange={(value) =>
                        setFormData((prev: any) => ({ ...prev, phone: value }))
                      }
                      onKeyDown={(e: any) => {
                        if (e.key === " ") {
                          e.preventDefault();
                          setFormData((prev: any) => ({
                            ...prev,
                            phone: "+1",
                          }));
                        }
                      }}
                      className="w-full bg-[#F8F8F8] border border-gray-100 rounded-xl px-4 py-3.5 text-sm focus-within:ring-4 focus-within:ring-black/5 focus-within:bg-white focus-within:border-black transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2 group">
                  <label
                    htmlFor="email"
                    className="text-[10px] font-bold tracking-[2px] uppercase text-gray-500 group-focus-within:text-black transition-colors"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#F8F8F8] border border-gray-100 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-4 focus:ring-black/5 focus:bg-white focus:border-black transition-all shadow-sm"
                  />
                </div>

                <div className="space-y-2 group">
                  <label
                    htmlFor="subject"
                    className="text-[10px] font-bold tracking-[2px] uppercase text-gray-500 group-focus-within:text-black transition-colors"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-[#F8F8F8] border border-gray-100 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-4 focus:ring-black/5 focus:bg-white focus:border-black transition-all shadow-sm"
                  />
                </div>

                <div className="space-y-2 group">
                  <label
                    htmlFor="message"
                    className="text-[10px] font-bold tracking-[2px] uppercase text-gray-500 group-focus-within:text-black transition-colors"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-[#F8F8F8] border border-gray-100 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-4 focus:ring-black/5 focus:bg-white focus:border-black transition-all shadow-sm resize-none"
                    placeholder="Please describe your requirements, expected quantities, and timeline..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full bg-black text-white rounded-full py-4 text-[13px] font-bold tracking-[1px] uppercase hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200 disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {formStatus === "submitting"
                    ? "Sending..."
                    : "Submit Inquiry"}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Map & Directions */}
        <div className="mt-20">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <h2 className="text-2xl font-sans font-bold tracking-tight">
              Find Our Factory
            </h2>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Sialkot,+Pakistan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold underline"
            >
              Get Directions
            </a>
          </div>
          <iframe
            title="Rasheed Clothing International location in Sialkot, Pakistan"
            src="https://www.google.com/maps?q=Sialkot,+Pakistan&output=embed"
            className="w-full h-[400px] rounded-3xl border border-gray-100"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
