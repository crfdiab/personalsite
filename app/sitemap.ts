import { MetadataRoute } from "next";
// import { getBlogPosts } from "./lib/posts";  // Remove this line
import { metaData } from "./config";
import { seoServices } from "./seo-services/seo-services-data";

const BaseUrl = metaData.baseUrl.endsWith("/")
  ? metaData.baseUrl
  : `${metaData.baseUrl}/`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let routes = ["", "blog", "projects", "seo-services"].map((route) => ({
    url: `${BaseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));
  
  let seoServiceRoutes = seoServices.map((service) => ({
    url: `${BaseUrl}seo-services/${service.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));
  
  return [...routes, ...seoServiceRoutes];
}
