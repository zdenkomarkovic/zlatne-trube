import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "@/node_modules/next/link";

interface Post {
  title: string;
  mainImage?: any;
  body: any;
  publishedAt: string;
}

async function getPost(slug: string): Promise<Post> {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      title,
      mainImage,
      body,
      publishedAt
    }`,
    { slug }
  );
  return post;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="container mx-auto px-4 pt-24 max-w-4xl">
      <Link href={"/#blog"} className="hover:text-primary ">
        Nazad na blog
      </Link>
      <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-8 text-primary">
        {post.title}
      </h1>

      {post.mainImage && (
        <div className="relative w-full h-96 mb-8">
          <Image
            src={urlFor(post.mainImage).width(1200).height(600).url()}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}

      <div className="prose prose-lg max-w-none">
        <PortableText value={post.body} />
      </div>
    </article>
  );
}
