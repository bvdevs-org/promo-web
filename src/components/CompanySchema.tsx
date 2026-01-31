export const CompanySchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "BV Devs",
    url: "https://bvdevs.com",
    // "logo": "https://bvdevs.com/logo.png",
    description: "Custom Software Development & Web Solutions",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Prague",
      addressCountry: "CZ",
    },
    // contactPoint: {
    //   "@type": "ContactPoint",
    //   telephone: "+420 123 456 789",
    //   contactType: "sales",
    //   areaServed: ["CZ", "EU", "US"],
    //   availableLanguage: ["Czech", "English"],
    // },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
