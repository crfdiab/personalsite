export interface SEOService {
    title: string;
    description: string;
    slug: string;
    contentFile: string; // This will store the path to the markdown file
    image: string;
    imageAlt: string;
  }
  
  export const seoServices: SEOService[] = [
    {
      title: "Professional SEO Services For Ecommerce",
      description: "We Provide Professional SEO Services For Ecommerce Stores To Help Them Rank Better In Organic Search And Drive More Sales And Revenue.",
      slug: "ecommerce-seo",
      contentFile: "/seo-services-content/ecommerce-seo.mdx",
      image: "/seo-services-for-e-commerce.webp",
      imageAlt: "SEO Services for E-commerce"
    },
    {
      title: "Professional SEO Services For Healthcare",
      description: "We Provide Professional SEO Services For Healthcare Business To Help Them Increase Their Brand Awareness and Drive More Leads To Their Platforms With SEO.",
      slug: "healthcare-seo",
      contentFile: "/seo-services-content/healthcare-seo.mdx",
      image: "/seo-services-for-healthcare.webp",
      imageAlt: "SEO Services for Healthcare"
    },
    {
      title: "SEO Services For Fintech Solutions",
      description: "More Search Clicks Provides Professional SEO Services For Fintech Sector To Help Them Drive More Revenue From Organic Search.",
      slug: "fintech-seo",
      contentFile: "/seo-services-content/fintech-seo.md",
      image: "/seo-services-for-fintech-solutions.webp",
      imageAlt: "SEO Services for Fintech Solutions"
    },
    {
      title: "SEO Services for Technology Startups",
      description: "More Search Clicks Provides Professional SEO Services For Technology Startups And Digital Marketing Agencies To Enhance Their Online Presence.",
      slug: "technology-seo",
      contentFile: "/seo-services-content/technology-seo.md",
      image: "/seo-services-for-technology-startups.webp",
      imageAlt: "SEO Services for Technology Startups"
    },
    {
      title: "SEO Services For Real Estate And Realtors",
      description: "More Search Clicks Provides Professional SEO Services For Real Estate And Realtors To Help Them Attract More Potential Customers And Leads.",
      slug: "real-estate-seo",
      contentFile: "/seo-services-content/real-estate-seo.md",
      image: "/seo-services-for-real-estate.webp",
      imageAlt: "SEO Services for Real Estate"
    },
    {
      title: "Professional SEO Services For Education",
      description: "More Search Clicks Provides Professional SEO Services For Education And Educational Institutes To Attract More Students, Teachers And Organizations With SEO.",
      slug: "education-seo",
      contentFile: "/seo-services-content/education-seo.md",
      image: "/seo-services-for-education.webp",
      imageAlt: "SEO Services for Education"
    },
    {
      title: "SEO Services for Restaurants & Food Services",
      description: "More Search Clicks Provides Professional SEO Services For Restaurants & Food Services Businesses To Drive More Customers And Clients To Their Stores.",
      slug: "restaurant-seo",
      contentFile: "/seo-services-content/restaurant-seo.md",
      image: "/seo-services-for-restaurants-and-food-services.webp",
      imageAlt: "SEO Services for Restaurants & Food Services"
    },
    {
      title: "SEO Services Lawyers And Law Firms",
      description: "We Provide Professional SEO Services For Lawyers And Law Firms To Improve Their Online Appearance in Organic Search To Reach More Clients.",
      slug: "lawyer-seo",
      contentFile: "/seo-services-content/lawyer-seo.md",
      image: "/seo-services-for-lawyers.webp",
      imageAlt: "SEO Services for Lawyers"
    }
  ];