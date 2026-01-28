import React from "react";
import { motion } from "framer-motion";

const TermsConditions = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 18 },
    },
  };

  const today = new Date().toLocaleDateString();

  return (
    <motion.div
      className="relative py-10 px-4 md:px-16"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
    >
      {/* Header */}
      <div className="text-center mt-16 text-white max-w-5xl mx-auto">
        <motion.h1
          variants={item}
          className="bg-gradient-to-r from-[#FFD700] via-[#BAFD00] to-[#9EFF00]
                     bg-clip-text text-transparent py-5 text-3xl font-bold md:text-5xl"
        >
          Terms & Conditions
        </motion.h1>
      </div>

      {/* Content Sections */}
      <motion.div
        variants={item}
        className="max-w-6xl mx-auto space-y-6 text-gray-300"
      >
        <p className="text-sm text-gray-400 italic">Last updated: {today}</p>

        {/** Each section as card */}
        <Section title="1. Definitions">
          <ul className="list-disc list-inside space-y-2">
            <li>
              “Website” refers to this site and all related pages, services, and
              content.
            </li>
            <li>“We”, “Us”, “Our” refers to the website owner and operator.</li>
            <li>
              “User”, “You” refers to any visitor, registered member, or
              customer.
            </li>
            <li>
              “EA” refers to Expert Advisor or automated trading software.
            </li>
            <li>
              “Services” refers to EA products, memberships, support, and
              related offerings.
            </li>
          </ul>
        </Section>

        <Section title="2. Eligibility">
          <p>By using this website, you confirm that:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>You are at least 18 years old.</li>
            <li>
              You have the legal capacity to enter into a binding agreement.
            </li>
            <li>
              You understand the risks associated with trading and automated
              trading systems.
            </li>
          </ul>
        </Section>

        <Section title="3. Account Registration">
          <p>
            To access certain features, you may be required to create an
            account.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Provide accurate and truthful information during registration.
            </li>
            <li>Be fully responsible for all activities under your account.</li>
          </ul>
          <p>
            We reserve the right to suspend or terminate any account that
            provides false information or violates these Terms & Conditions.
          </p>
        </Section>

        <Section title="4. Products & Services">
          <p>We provide access to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Expert Advisors (EA)</li>
            <li>Membership plans</li>
            <li>Community support and settings</li>
          </ul>
          <p>
            All products and services are provided “as is” without any guarantee
            of profitability or performance.
          </p>
        </Section>

        <Section title="5. Payments & Refunds">
          <ul className="list-disc list-inside space-y-2">
            <li>
              Payments for EA products or memberships must be completed before
              access is granted.
            </li>
            <li>All sales are final, unless otherwise stated.</li>
            <li>
              No refunds will be provided once access to digital products, EA
              files, settings, or VIP services has been granted.
            </li>
            <li>
              We reserve the right to change pricing, plans, or payment methods
              at any time without prior notice.
            </li>
          </ul>
          <p>
            All products and services are provided “as is” without any guarantee
            of profitability or performance.
          </p>
        </Section>

        <Section title="6. Exness Account Submission & Verification">
          <p>
            Users may be required to submit their trading account information
            for verification purposes. You agree that:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              All submitted account information must be accurate and truthful.
            </li>
            <li>
              Verification is performed manually and approval is at our sole
              discretion.
            </li>
            <li>Submission does not guarantee approval.</li>
            <li>
              We reserve the right to reject or remove access if accounts are
              not registered under our referral or violate our rules.
            </li>
          </ul>
        </Section>
        <Section title="7. Risk Acknowledgement">
          <p>By using our services, you acknowledge that:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Trading involves significant financial risk.</li>
            <li>Automated systems can experience losses.</li>
            <li>Market conditions can change rapidly and unpredictably.</li>
          </ul>
          <p>
            You agree that we are not liable for any losses, damages, or missed
            opportunities arising from the use of our EA, strategies, or
            services.
          </p>
        </Section>
        <Section title="8. Intellectual Property">
          <p>All content on this website, including but not limited to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Text</li>
            <li>Software</li>
            <li>Logos</li>
            <li>Graphics</li>
            <li>EA files</li>
            <li>Settings</li>
          </ul>
          <p>
            is the intellectual property of the website owner and may not be
            copied, distributed, resold, or modified without written permission.
          </p>
          <p>Unauthorized use may result in legal action.</p>
        </Section>
        <Section title="9. Prohibited Use">
          <p>You agree not to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Use the website for unlawful purposes.</li>
            <li>Attempt to reverse engineer, copy, or redistribute the EA.</li>
            <li>Share access, licenses, or files without authorization.</li>
            <li>Abuse support channels or community platforms</li>
          </ul>
        </Section>
        <Section title="10. Limitation of Liability">
          <p>
            To the fullest extent permitted by law, we shall not be liable for
            any direct, indirect, incidental, or consequential damages resulting
            from:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Use or inability to use the website or services</li>
            <li>Trading losses</li>
            <li>Technical issues</li>
            <li>Third-party broker actions</li>
          </ul>
        </Section>
        <Section
          title="11. Termination
"
        >
          <p>
            We reserve the right to suspend or terminate access to our website,
            services, or products at any time without notice if these Terms &
            Conditions are violated.
          </p>
        </Section>
        <Section title="12. Changes to Terms">
          <p>
            We may update these Terms & Conditions at any time. Continued use of
            the website after changes are posted constitutes acceptance of the
            revised terms.
          </p>
        </Section>
        <Section title="13. Governing Law">
          <p>
            These Terms & Conditions shall be governed and interpreted in
            accordance with applicable local laws
          </p>
        </Section>
        <Section title="14. Contact Information">
          <p>
            If you have any questions regarding these Terms & Conditions or the
            Disclaimer, please contact us through the official communication
            channels provided on this website.
          </p>
        </Section>
      </motion.div>
    </motion.div>
  );
};

// Reusable Section component with subtle card style
const Section = ({ title, children }) => (
  <motion.section
    whileHover={{ y: -3 }}
    className="bg-gray-900/20 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <h2 className="text-xl md:text-2xl font-semibold text-[#FFD700] mb-3">
      {title}
    </h2>
    <div className="space-y-3">{children}</div>
  </motion.section>
);

export default TermsConditions;
