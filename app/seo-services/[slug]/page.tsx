import React from "react";
import type { Metadata } from "next";
import { seoServices } from "../seo-services-data";
import { metaData } from "../../config";
import { notFound } from "next/navigation";
import Breadcrumbs from "app/components/Breadcrumb"
import { GoogleTagManager } from "@next/third-parties/google"

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const service = seoServices.find((s) => s.slug === params.slug);
  if (!service) {
    return;
  }

  return {
    title: `${service.title}`,
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
    <>
      <GoogleTagManager gtmId="GTM-MHMNCC54" />
      <section>
        <h1 className="mb-8 text-2xl font-medium tracking-tight" aria-label={service.title} aria-roledescription="SEO Service">{service.title}</h1>
      <br />
      <Breadcrumbs path={`/seo-services/${service.slug}`} lastItemLabel={service.title} />
      <div className="prose prose-neutral dark:prose-invert">
        <p>{service.description}</p>
        <img src={service.image} alt={service.imageAlt} />
        <p dangerouslySetInnerHTML={{ __html: service.content }} />
      </div>
      <h2 className="text-xl font-medium tracking-tight">Frequently Asked Questions</h2>
      <br />
      <ul>
        {service.faq.map((faq, index) => (
          <li key={index}>
            <h3 className="text-lg font-medium tracking-tight">{faq.question}</h3>
            <p>{faq.answer}</p> <br />
          </li>
        ))}
        </ul>
      </section>
    </>
  );
}