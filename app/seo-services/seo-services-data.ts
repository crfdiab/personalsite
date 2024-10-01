export interface SEOService {
    title: string;
    description: string;
    slug: string;
    content: string;
    faq: {
      question: string;
      answer: string;
    }[];
    image: string;
    imageAlt: string;
  }
  
  export const seoServices: SEOService[] = [
    {
      title: "Professional SEO Services For Ecommerce",
      description: "We Provide Professional SEO Services For Ecommerce Stores To Help Them Rank Better In Organic Search And Drive More Sales And Revenue.",
      slug: "ecommerce-seo",
      content: "Discover our specialized SEO services for e-commerce businesses.",
      faq: [
        {
          question: "How can SEO benefit my e-commerce business?",
          answer: "SEO can help your e-commerce business by improving your online visibility, attracting more qualified leads, and increasing your conversion rates."
        },
        {
          question: "What are some key SEO strategies for e-commerce websites?",
          answer: "Key SEO strategies for e-commerce websites include optimizing product pages, implementing schema markup, improving site speed, and building a strong internal linking structure."
        }
      ],
      image: "/seo-services-for-e-commerce.webp",
      imageAlt: "SEO Services for E-commerce"
    },
    {
      title: "Professional SEO Services For Healthcare",
      description: "We Provide Professional SEO Services For Healthcare Business To Help Them Increase Their Brand Awareness and Drive More Leads To Their Platforms With SEO.",
      slug: "healthcare-seo",
      content: "Explore our tailored SEO services for healthcare providers and medical practices.",
      faq: [
        {
          question: "Why is SEO important for healthcare organizations?",
          answer: "SEO is crucial for healthcare organizations to increase their online visibility, establish credibility, and connect with patients searching for medical information and services online."
        },
        {
          question: "What are some unique SEO challenges for healthcare websites?",
          answer: "Healthcare websites face challenges such as complying with HIPAA regulations, optimizing for local search, and creating authoritative content on complex medical topics."
        }
      ],
      image: "/seo-services-for-healthcare.webp",
      imageAlt: "SEO Services for Healthcare"
    },
    {
      title: "Professional SEO Services For Finance",
      description: "More Search Clicks Provides Professional SEO Services For Finance And Financial Institutions To Help Them Drive More Revenue From Organic Search.",
      slug: "finance-seo",
      content: "Learn about our specialized SEO services for banks, credit unions, and financial advisors.",
      faq: [
        {
          question: "How can SEO benefit my financial business?",
          answer: "SEO can help your financial business by improving your online visibility, attracting more qualified leads, and establishing your authority in the financial sector."
        },
        {
          question: "What are some key SEO strategies for finance websites?",
          answer: "Key SEO strategies for finance websites include creating high-quality, informative content, optimizing for local search, implementing secure HTTPS, and building trust through authoritative backlinks."
        }
      ],
      image: "/seo-services-for-finance.webp",
      imageAlt: "SEO Services for Finance"
    },
    {
      title: "SEO Services for Technology Startups",
      description: "More Search Clicks Provides Professional SEO Services For Technology Startups And Digital Marketing Agencies To Enhance Their Online Presence.",
      slug: "technology-seo",
      content: "Discover our cutting-edge SEO services for technology companies and startups.",
      faq: [
        {
          question: "Why is SEO important for technology companies?",
          answer: "SEO is crucial for technology companies to increase their online visibility, showcase their innovations, and attract potential customers, partners, and investors."
        },
        {
          question: "What are some unique SEO challenges for tech websites?",
          answer: "Tech websites often face challenges such as explaining complex products or services, keeping up with rapidly changing industry trends, and competing in a highly saturated online space."
        }
      ],
      image: "/seo-services-for-technology-startups.webp",
      imageAlt: "SEO Services for Technology Startups"
    },
    {
      title: "SEO Services For Real Estate And Realtors",
      description: "More Search Clicks Provides Professional SEO Services For Real Estate And Realtors To Help Them Attract More Potential Customers And Leads.",
      slug: "real-estate-seo",
      content: "Discover our specialized SEO services for real estate professionals.",
      faq: [
        {
          question: "How can SEO benefit my real estate business?",
          answer: "SEO can help your real estate business by improving your online visibility, attracting more qualified leads, and establishing your authority in the local real estate market."
        },
        {
          question: "What are some key SEO strategies for real estate websites?",
          answer: "Key SEO strategies for real estate websites include optimizing for local search, creating high-quality property listings, implementing schema markup, and building authoritative backlinks."
        }
      ],
      image: "/seo-services-for-real-estate.webp",
      imageAlt: "SEO Services for Real Estate"
    },
    {
      title: "Professional SEO Services For Education",
      description: "More Search Clicks Provides Professional SEO Services For Education And Educational Institutes To Attract More Students, Teachers And Organizations With SEO.",
      slug: "education-seo",
      content: "Learn about our tailored SEO services for schools, colleges, and universities.",
      faq: [
        {
          question: "Why is SEO important for educational institutions?",
          answer: "SEO is crucial for educational institutions to increase their visibility online, attract prospective students, and showcase their programs and achievements to a wider audience."
        },
        {
          question: "What unique SEO challenges do educational websites face?",
          answer: "Educational websites often face challenges such as optimizing for multiple locations, managing large amounts of content, and competing with other institutions for rankings on relevant keywords."
        }
      ],
      image: "/seo-services-for-education.webp",
      imageAlt: "SEO Services for Education"
    },
    {
      title: "SEO Services for Restaurants & Food Services",
      description: "More Search Clicks Provides Professional SEO Services For Restaurants & Food Services Businesses To Drive More Customers And Clients To Their Stores.",
      slug: "restaurant-seo",
      content: "Explore our SEO services tailored for restaurants and food service businesses.",
      faq: [
        {
          question: "How can SEO help my restaurant attract more customers?",
          answer: "SEO can help your restaurant by improving your visibility in local search results, optimizing your website for relevant keywords, and enhancing your online reputation through reviews and ratings."
        },
        {
          question: "What are some important SEO factors for restaurant websites?",
          answer: "Important SEO factors for restaurant websites include local SEO optimization, mobile-friendliness, fast loading times, and structured data for menus and business information."
        }
      ],
      image: "/seo-services-for-restaurants-and-food-services.webp",
      imageAlt: "SEO Services for Restaurants & Food Services"
    },
    {
      title: "SEO Services Lawyers And Law Firms",
      description: "We Provide Professional SEO Services For Lawyers And Law Firms To Improve Their Online Appearance in Organic Search To Reach More Clients.",
      slug: "lawyer-seo",
      content: "Discover how our SEO services can help your law firm stand out in a competitive online landscape.",
      faq: [
        {
          question: "Why is SEO important for law firms?",
          answer: "SEO is crucial for law firms to increase their online visibility, establish credibility, and attract potential clients who are searching for legal services online."
        },
        {
          question: "What are some key SEO strategies for law firm websites?",
          answer: "Key SEO strategies for law firm websites include optimizing for local search, creating high-quality content on legal topics, building authoritative backlinks, and implementing schema markup for legal services."
        }
      ],
      image: "/seo-services-for-lawyers.webp",
      imageAlt: "SEO Services for Lawyers"
    }
  ];  