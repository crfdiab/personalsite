import React from "react";
import fs from 'fs/promises';
import path from 'path';
import { seoServices } from "../seo-services-data";
import { notFound } from "next/navigation";
import Breadcrumbs from "app/components/Breadcrumb"
import { GoogleTagManager } from "@next/third-parties/google";
import { MDXRemote } from 'next-mdx-remote/rsc';
import { metaData } from "../../config";
import type { Metadata } from "next";
import ContactForm from "app/components/ContactForm";
export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const service = seoServices.find((s) => s.slug === params.slug);
  if (!service) {
    return;
  }

  return {
    title: `${service.title} | ${metaData.siteName}`,
    description: service.description,
    alternates: {
      canonical: `${metaData.baseUrl}/seo-services/${service.slug}`,
    },
  };
}

async function getServiceContent(slug: string) {
  const mdxFilePath = path.join(process.cwd(), 'app', 'seo-services-content', `${slug}.mdx`);
  const mdFilePath = path.join(process.cwd(), 'app', 'seo-services-content', `${slug}.md`);
  
  try {
    let content;
    if (await fs.access(mdxFilePath).then(() => true).catch(() => false)) {
      content = await fs.readFile(mdxFilePath, 'utf8');
      console.log('MDX content found');
    } else if (await fs.access(mdFilePath).then(() => true).catch(() => false)) {
      content = await fs.readFile(mdFilePath, 'utf8');
      console.log('MD content found');
    } else {
      console.log(`No content file found for slug: ${slug}`);
      return ''; // Return empty string if no file is found
    }
    return content;
  } catch (error) {
    console.error('Error reading content file:', error);
    return ''; // Return empty string in case of any error
  }
}

export default async function SEOServicePage({ params }: { params: { slug: string } }) {
  const service = seoServices.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const content = await getServiceContent(service.slug);

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
          <MDXRemote source={content} />
        </div>
        <ContactForm />
      </section>
    </>
  );
} 