import { Metadata } from 'next'
import { metaData } from "../config";
import { GoogleTagManager } from "@next/third-parties/google"

export const metadata: Metadata = {
  title: "Professional SEO Services For Businesses",
  description: "More Search Clicks Provides Professional Search Engine Optimization (SEO) Services For Businesses To Help Them Rank Better, Contact Us Today.",
  alternates: {
    canonical: `${metaData.baseUrl}/seo-services`,
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <GoogleTagManager gtmId="GTM-MHMNCC54" />
      {children}
    </>
  )
}