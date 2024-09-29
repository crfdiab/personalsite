import React from "react";
import Link from "next/link";
import { seoServices } from "../seo-services/seo-services-data";
import { metaData } from "../config";

export const metadata = {
  title: "SEO Services",
  description: "Our SEO Services",
  alternates: {
    canonical: `${metaData.baseUrl}/seo-services`,
  },
};

export default function SEOServicesPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">SEO Services</h1>
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
    </section>
  );
}