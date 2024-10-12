import { metaData } from "./config";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `https://storage.moresearch.click/static/sitemap.xml`,
  };
}
