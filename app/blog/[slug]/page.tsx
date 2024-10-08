import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { formatDate, getBlogPosts } from "app/lib/posts";
import { metaData } from "app/config";
import Breadcrumbs from "app/components/Breadcrumb";
import { GoogleTagManager } from "@next/third-parties/google"

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  const ogImage = image || `${metaData.baseUrl}/og?title=${encodeURIComponent(title)}`;
  const canonicalUrl = `${metaData.baseUrl}/blog/${post.slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: canonicalUrl,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function Blog({ params }: { params: { slug: string } }) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.metadata.title,
    datePublished: post.metadata.publishedAt,
    dateModified: post.metadata.publishedAt,
    description: post.metadata.summary,
    image: post.metadata.image
      ? `${metaData.baseUrl}${post.metadata.image}`
      : `${metaData.baseUrl}/og?title=${encodeURIComponent(post.metadata.title)}`,
    url: `${metaData.baseUrl}/blog/${post.slug}`,
    author: {
      "@type": "Person",
      name: metaData.name,
    },
  };

  return (
    <>
      <GoogleTagManager gtmId="GTM-MHMNCC54" />
      <section>
        <script
          type="application/ld+json"
          suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="title mb-3 font-medium text-2xl tracking-tight" aria-label={post.metadata.title} aria-roledescription="Blog Post">
        {post.metadata.title}
      </h1>
      <br />
      <div className="flex justify-between items-center mt-2 mb-8 text-medium">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <div className="flex justify-between items-center mt-2 mb-8 text-medium">
        <Breadcrumbs path={`/blog/${post.slug}`} lastItemLabel={post.metadata.title}/>
      </div>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <CustomMDX source={post.content} />
      </article>
    </section>
    </>
  );
}