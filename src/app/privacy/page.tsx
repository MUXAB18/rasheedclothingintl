import { companyData } from "@/data/company";

const sections = [
  ["Information we collect", "When you contact us or request a quote we collect your name, email, phone number, company and project details. We also collect anonymous usage data through Google Analytics."],
  ["How we use it", "We use your information to respond to enquiries, prepare quotes, fulfil orders and improve our website. We do not sell your personal data."],
  ["Sharing", "We share data only with service providers needed to operate the site and fulfil orders (email delivery, hosting, shipping partners), or when required by law."],
  ["Cookies and analytics", "We use cookies for analytics and advertising. You can block or delete cookies in your browser settings."],
  ["Retention and your rights", "We keep enquiry data only as long as needed for business purposes. You may ask us to access, correct or delete your data at any time."],
];

export default function PrivacyPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 pt-36 pb-24 text-white">
      <h1 className="text-4xl md:text-5xl font-display mb-3">Privacy Policy</h1>
      <p className="text-white/40 text-sm mb-10">Last updated: November 2026</p>
      {sections.map(([h, b]) => (
        <div key={h} className="mb-8">
          <h2 className="text-xl font-bold mb-2">{h}</h2>
          <p className="text-white/65 leading-relaxed">{b}</p>
        </div>
      ))}
      <p className="text-white/65">
        Questions? Email <a className="underline" href={`mailto:${companyData.emails.primary}`}>{companyData.emails.primary}</a>.
      </p>
    </section>
  );
}
