import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: any;
  excerpt?: string;
  publishedAt: string;
}

async function getPosts(): Promise<Post[]> {
  const posts = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      excerpt,
      publishedAt
    }`
  );
  return posts;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug.current}`}
            className="group block"
          >
            <article className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              {post.mainImage && (
                <div className="relative w-full h-48">
                  <Image
                    src={urlFor(post.mainImage).width(400).height(300).url()}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                )}
                <time className="text-sm text-gray-500">
                  {new Date(post.publishedAt).toLocaleDateString("sr-RS", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
