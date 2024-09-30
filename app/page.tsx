import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      
        <Image
          src="/Mohamed-Diab-SEO-Consultant.webp"
          alt="SEO Consultant Mohamed Diab"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      

      <h1 className="mb-8 text-2xl font-medium tracking-tight" aria-label="Mohamed Diab - SEO Consultant And Specialist" aria-roledescription="SEO Consultant And Specialist">
        Mohamed Diab - <p className="underline decoration-sky-500">SEO Consultant And Specialist</p>
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
        I Am <a href="https://www.linkedin.com/in/diaab/" target="_blank">Mohamed Diab</a>, SEO Consultant And Specialist With More Than 11 Years Of Proven-Work Experience In Search Engine Optimization. More Search Clicks Is my Website Where I Offer SEO Consulting Services And Writing About SEO.
        </p>
        <p>
        You Can Check My Previous SEO Projects I Have Worked On Ranging From Personal Projects And Clients Which I Have Provided Them My SEO Services Across Years.  Currently I Work As Full-Time Search Engine Optimization Specialist At ATHEk, Previously Digital Brandria And Osolutions.
        </p>
        You Can Start Learning “What Is SEO” Or You Can Request My <a href="/seo-services" aria-label="SEO Services" aria-roledescription="SEO Services">SEO Consultation Services</a> And Thanks For Stopping by My Site.
        <blockquote>
        Thanks <em><a href="https://www.imsirius.xyz/">Sirius</a></em> For Creating This Beautiful Template Which I Have Forked And Edited My Own Copy Much Love ❤️❤️.
        </blockquote>
        
      </div>
      <br></br>
      <p className="text-center">
        Connect With Me On <a href="https://www.linkedin.com/in/diaab/" target="_blank" className="text-blue-500">LinkedIn</a> Or <a href="mailto:goonairdiab@gmail.com" className="text-blue-500">Email Me</a>
        </p>
    </section>
  );
}
