import Link from "next/link";
import { formatDate, getBlogPosts } from "app/lib/posts";
import { metaData } from "app/config";
import Breadcrumbs from "app/components/Breadcrumb";
export const metadata = {
  title: "SEO Blog",
  description: "Learn About Search Engine Optimization From More Search Clicks SEO Blog. Easy To Digest SEO Guides, Latest SEO News, And More About SEO.",
  alternates: {
    canonical: `${metaData.baseUrl}/blog`,
  },
};

export default function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">More Search Clicks SEO Blog</h1>
      <Breadcrumbs path="/blog" lastItemLabel="Blog" />
      <br></br>
      <div>
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4 transition-opacity duration-200 hover:opacity-80"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
                <p className="text-black dark:text-white tracking-tight">
                  {post.metadata.title}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
