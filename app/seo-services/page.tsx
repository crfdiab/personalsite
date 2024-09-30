'use client';

import React, { useState } from "react";
import Link from "next/link";
import { seoServices } from "./seo-services-data";
import { metaData } from "../config";
import Breadcrumbs from "../components/Breadcrumb";
import ContactForm from "../components/ContactForm";
export default function SEOServicesPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight" aria-label="SEO Services" aria-roledescription="SEO Services">SEO Services</h1>
      <Breadcrumbs path="/seo-services" lastItemLabel="SEO Services" />
      <br></br>
      <p>
      Rank Your Business For Your Targeted Keyword With More Search Clicks Professional SEO Services For Businesses. Our Search Engine Optimization Services Covers Wide-Array Of Industries, Languages And Verticals.
      </p>
      <br></br>
      <div className="mb-8">
        <button
          className="text-xl font-medium tracking-tight mb-4 flex items-center focus:outline-none"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
        >
          Contents
          <svg
            className={`ml-2 h-5 w-5 transform transition-transform duration-200 ${
              isExpanded ? 'rotate-180' : ''
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {isExpanded && (
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><a href="#what-our-seo-services-includes" className="text-blue-600 hover:text-blue-800">What Our SEO Services Includes?</a></li>
            <li><a href="#complete-audit" className="text-blue-600 hover:text-blue-800">Complete Audit</a></li>
            <li><a href="#keyword-research-and-analysis" className="text-blue-600 hover:text-blue-800">Keyword Research and Analysis</a></li>
            <li><a href="#creating-seo-strategy" className="text-blue-600 hover:text-blue-800">Creating SEO Strategy</a></li>
            <li><a href="#creating-optimized-content" className="text-blue-600 hover:text-blue-800">Creating Optimized Content</a></li>
            <li><a href="#building-relevant-links" className="text-blue-600 hover:text-blue-800">Building Relevant Links</a></li>
            <li><a href="#building-citations" className="text-blue-600 hover:text-blue-800">Building Citations</a></li>
            <li><a href="#ranking-and-reporting" className="text-blue-600 hover:text-blue-800">Ranking and Reporting</a></li>
          </ul>
        )}
      </div>
      <h2 className="text-xl font-medium tracking-tight">What Our SEO Services Includes?</h2>
      <br></br>
      <img src="/Our-SEO-Services.webp" alt="SEO Services" className="w-full h-auto" />
      <br></br>
      <p>
      More Search Clicks Doesn’t Approach “All-In-One Managed SEO Services”, Rather We Approach “Business-Oriented SEO Services”. Our Provides Search Engine Optimization Services Are Provided Based On Each Business Need And Goal From SEO. Here Is What’s Is Included In Our SEO Services
      </p>
      <br></br>
      <h3 className="text-xl font-medium tracking-tight">Complete Audit</h3>
      <p>
      Our SEO Services Begins With Complete Technical And Content Audit For Your Website To Spot Issues That Impacts Your Overall Website Performance In Search Engines.
      </p>
      <br></br>
      <h3 className="text-xl font-medium tracking-tight" aria-label="Keyword Research And Analysis" aria-roledescription="Keyword Research And Analysis">Keyword Research And Analysis</h3>
      <p>
      We Do Deep Keyword Research And Analysis Through Thorough Competition Analysis For Your Competition Space And Spotting Your Top And Strongest Organic Competitors.
      </p>
      <br></br>
      <h3 className="text-xl font-medium tracking-tight" aria-label="Creating SEO Strategy" aria-roledescription="Creating SEO Strategy">Creating SEO Strategy</h3>
      <p>
      We Create An Optimized And Tailored SEO Strategy Based On Our Research And Analysis Findings, And Then We Execute On Your SEO Strategy On A Specific Timespan To Be Ready To Dominate Your Competitors In Search Engines.
      </p>
      <br></br>
      <h3 className="text-xl font-medium tracking-tight" aria-label="Creating Optimized Content" aria-roledescription="Creating Optimized Content">Creating Optimized Content</h3>
      <p>
      We Create Highly-Optimized Content For Users And Search Engines, Content That Convert Leads To Your Business, Rank Well In Search Engines And Build Your Brand As An Authority Within Your Niche.
      </p>
      <br></br>
      <h3 className="text-xl font-medium tracking-tight" aria-label="Building Relevant Links" aria-roledescription="Building Relevant Links">Building Relevant Links</h3>
      <p>
      We Build Strong And Relevant Backlinks From Relevant Websites In Your Space And Websites Trusted By Google To Help Google Trust Your Website And Rank It Better In Search Results.
      </p>
      <br></br>
      <h3 className="text-xl font-medium tracking-tight" aria-label="Building Citations" aria-roledescription="Building Citations">Building Citations</h3>
      <p>
      We Build Citations For Your Business Through Local Directories And Social Media Platforms To Ensure The Consistency Of Your Business Details Matching Each Other On Different Platforms, As This Helps In Local SEO.
      </p>
      <br></br>
      <h3 className="text-xl font-medium tracking-tight" aria-label="Ranking And Reporting" aria-roledescription="Ranking And Reporting">Ranking And Reporting</h3>
      <p>
      At More Search Clicks On Monthly Basis Or Bi-Weekly Basis We Send Out Reports To Our Valued Clients With What Have Been Done Through The Website From Content Changes To Reporting Rankings in Beautiful Reports To Them.
      </p>
      <br></br>
      <h2 className="text-xl font-medium tracking-tight">What Industries Our SEO Services Cover?</h2>
      <br></br>
      <p>
      Throughout Years We Have Been Providing Our SEO Services For Businesses in Different Industries, Checkout Our List Of Industries We Provide SEO Services For.
      </p>
      <br></br>
      <div className="space-y-4">
        {seoServices.map((service) => (
          <Link
            key={service.slug}
            href={`/seo-services/${service.slug}`}
            className="block p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <h2 className="text-lg font-medium">{service.title}</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">{service.description}</p>
          </Link>
        ))}
      </div>
      <br></br>
      <h2 className="text-xl font-medium tracking-tight">Contact Us</h2>
      <br></br>
      <p>
      Contact Us Using The Form Below And We Will Get In Contact With You Shortly. Don't Worry We Won't Spam Your Inbox
      </p>
      <br></br>
      <ContactForm />
    </section>
  );
}