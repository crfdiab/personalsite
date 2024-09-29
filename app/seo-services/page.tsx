import React from "react";
import Link from "next/link";
import { seoServices } from "../seo-services/seo-services-data";
import { metaData } from "../config";
import Breadcrumbs from "../components/Breadcrumb";


export const metadata = {
  title: "Professional SEO Services For Businesses",
  description: "Professional SEO Services For Businesses By More Search Clicks SEO Consultancy. Our SEO Services Are Tailored For Each Business Need From SEO.",
  alternates: {
    canonical: `${metaData.baseUrl}/seo-services`,
  },
};

export default function SEOServicesPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">SEO Services</h1>
      <Breadcrumbs path="/seo-services" lastItemLabel="SEO Services" />
      <br></br>
      <p>
        Check Out My SEO Services I Provide For Digital Agencies, Individuals And Enterprises. My SEO Services Are Not All-In-One Solutions, Rather It's A Customized Approach To Meet Your Specific Needs.
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
        <p className="text-center">
          Connect With Me On <a href="https://www.linkedin.com/in/diaab/" target="_blank" className="text-blue-500">LinkedIn</a>
        </p>
      </div>
    </section>
  );
}