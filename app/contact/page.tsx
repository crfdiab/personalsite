import React from 'react';
import ContactForm from '../components/ContactForm';
import Link from 'next/link';
import { metaData, socialLinks } from '../config';
import Breadcrumbs from '../components/Breadcrumb';
import Script from 'next/script';

export const metadata = {
  title: "Contact Us",
  description: "Contact More Search Clicks for SEO inquiries, project discussions, or an SEO audit.",
  alternates: {
    canonical: `${metaData.baseUrl}/contact`,
  },
};

export default function ContactPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Contact Us</h1>
      <Breadcrumbs path="/contact" lastItemLabel="Contact" />
      <br />
      <p className="mb-6">
        Contact More Search Click If You Have Any Inquiries, Project To Discuss Or An SEO Audit. Feel Free To Fill-In The Form Below And We Usually Respond Fast.
      </p>
      <ContactForm />
      <div className="mt-8">
        <p className="mb-2">Or Send Us An Email:</p>
        <button
          id="revealEmailBtn"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Click to Reveal Email
        </button>
      </div>
      <div className="mt-4">
        <p className="mb-2">Or Connect With Me On LinkedIn:</p>
        <Link 
          href={socialLinks.linkedin}
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Click to Connect on LinkedIn
        </Link>
      </div>
      <Script id="reveal-email-script">
        {`
          document.getElementById('revealEmailBtn').addEventListener('click', function() {
            this.textContent = 'Click to Email Us';
            this.onclick = function() {
              window.location.href = 'mailto:${socialLinks.email}';
            };
          });
        `}
      </Script>
    </section>
  );   
}