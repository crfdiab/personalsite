import React from "react";
import type { Metadata } from "next";
import { seoServices } from "../seo-services-data";
import { metaData } from "../../config";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const service = seoServices.find((s) => s.slug === params.slug);
  if (!service) {
    return;
  }

  return {
    title: `${service.title} | SEO Services`,
    description: service.description,
    alternates: {
      canonical: `${metaData.baseUrl}/seo-services/${service.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return seoServices.map((service) => ({
    slug: service.slug,
  }));
}

export default function SEOServicePage({ params }) {
  const service = seoServices.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">{service.title}</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>{service.description}</p>
        {/* Add more detailed content about the specific SEO service here */}
      </div>
    </section>
  );
}