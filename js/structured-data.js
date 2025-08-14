// Dados estruturados da organização
const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  image: [
    "https://comerciariosguanambi.com.br/images/systa-marketing-tecnologia-desenvolvimento-de-websites.jpg",
    "https://comerciariosguanambi.com.br/images/systa-marketing-tecnologia-website-posicionado-na-primeira-pagina-google.jpg",
  ],
  name: "Sindicato dos Empregados no Comércio e Serviços de Guanambi, Caetité e Região",
  description: "Nosso Sindicato. Nossa Força.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Camerino Neves, 408 A",
    addressLocality: "Guanambi",
    addressRegion: "BA",
    postalCode: " 46433000",
    addressCountry: "BR",
  },
  url: "https://comerciariosguanambi.com.br",
  sameAs: ["https://www.instagram.com/sind.comerciariosgbi"],
  logo: "https://comerciariosguanambi.com.br/images/comerciariosguanambi-logotipo-60.png",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+55 77999734460",
      contactType: "customer service",
    },
  ],
};

// Função para inserir dados estruturados no HTML
function insertStructuredData() {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(organizationData);
  document.head.appendChild(script);
}

// Executar quando o DOM estiver carregado
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", insertStructuredData);
} else {
  insertStructuredData();
}

// Exportar para uso em outros arquivos
if (typeof module !== "undefined" && module.exports) {
  module.exports = { organizationData, insertStructuredData };
}
