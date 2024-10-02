import React from 'react';
import ContactForm from '../components/ContactForm';
import { metaData } from '../config';
import Breadcrumbs from '../components/Breadcrumb';
import { GoogleTagManager } from "@next/third-parties/google"

export const metadata = {
  title: "Contact Us",
  description: "Contact More Search Clicks for SEO inquiries, project discussions, or an SEO audit.",
  alternates: {
    canonical: `${metaData.baseUrl}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <GoogleTagManager gtmId="GTM-MHMNCC54" />
      <section>
        <h1 className="mb-8 text-2xl font-medium tracking-tight">Contact Us</h1>
        <Breadcrumbs path="/contact" lastItemLabel="Contact" />
      <br />
      <p className="mb-6">
        Contact More Search Click If You Have Any Inquiries, Project To Discuss Or An SEO Audit. Feel Free To Fill-In The Form Below And We Usually Respond Fast.
      </p>
      <ContactForm />
    </section> 
    </>
  );   
}