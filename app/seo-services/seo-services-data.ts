export interface SEOService {
    title: string;
    description: string;
    slug: string;
  }
  
  export const seoServices: SEOService[] = [
    {
      title: "SEO for E-commerce",
      description: "Boost your online store's visibility and sales with our specialized e-commerce SEO services.",
      slug: "for-ecommerce",
    },
    {
      title: "Local SEO",
      description: "Improve your local search presence and attract more customers in your area.",
      slug: "local-seo",
    },
    {
      title: "Technical SEO",
      description: "Optimize your website's technical aspects for better search engine performance.",
      slug: "technical-seo",
    },
    // Add more services as needed
  ];