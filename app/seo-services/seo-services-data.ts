export interface SEOService {
    title: string;
    description: string;
    slug: string;
    content: string;
    faq: {
      question: string;
      answer: string;
    }[];
  }
  
  export const seoServices: SEOService[] = [
    {
      title: "SEO Services for E-commerce",
      description: "Boost your online store's visibility and sales with our specialized e-commerce SEO services.",
      slug: "for-ecommerce",
      content: "Check Out Our SEO Services For E-commerce <a href='https://www.google.com'>Google</a>",
      faq: [
        {
          question: "What is SEO?",
          answer: "SEO stands for Search Engine Optimization. It is the process of optimizing your website to improve its visibility and ranking on search engines like Google, Bing, and Yahoo."
        },
        {
          question: "Why is SEO important?",
          answer: "SEO is crucial for online businesses because it helps increase website traffic, improve user experience, and ultimately drive more sales."
        }
      ] // Added missing closing bracket for faq array
    }, // Added missing closing brace and comma
    {
      title: "Local SEO",
      description: "Improve your local search presence and attract more customers in your area.",
      slug: "local-seo",
      content: "content",
      faq: [
        {
          question: "What is Local SEO?",
          answer: "Local SEO is the practice of optimizing your website and online presence to improve your visibility in local search results."
        },
        {
          question: "How does Local SEO work?",
          answer: "Local SEO involves techniques like optimizing your website for location-based keywords, building citations, and ensuring your Google My Business profile is accurate and complete."
        }
      ]
    },
    {
      title: "Technical SEO",
      description: "Optimize your website's technical aspects for better search engine performance.",
      slug: "technical-seo",
      content: "content",
      faq: [
        {
          question: "What is Technical SEO?",
          answer: "Technical SEO refers to the practice of optimizing your website's technical aspects to improve its performance in search engine rankings."
        },
        {
          question: "Why is Technical SEO important?",
          answer: "Technical SEO is crucial because it ensures your website is technically sound, which can lead to better user experience, faster loading times, and improved search engine rankings."
        }
      ] // Added missing closing bracket for faq array
    } // Added missing closing brace
    // Add more services as needed
  ];