import { blogPosts } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, User } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto max-w-4xl px-4 py-16">
      <div className="text-center mb-8">
        <Link href="/blog" className="text-sm text-primary hover:underline">
          &larr; Back to Blog
        </Link>
      </div>

      <h1 className="font-headline text-4xl font-bold text-center md:text-5xl lg:text-6xl">
        {post.title}
      </h1>

      <div className="mt-6 flex justify-center items-center space-x-6 text-muted-foreground text-sm">
        <div className="flex items-center space-x-2">
          <User className="h-4 w-4" />
          <span>{post.author}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="h-4 w-4" />
          <span>{post.date}</span>
        </div>
      </div>

      <div className="relative h-64 md:h-96 my-12 overflow-hidden rounded-lg shadow-lg">
        <Image src={post.imageUrl} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="church worship" />
      </div>

      <div
        className="prose prose-lg dark:prose-invert max-w-none mx-auto"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}

// Add some basic prose styles to globals.css if they don't exist
// This is a minimal example. For full control, use @tailwindcss/typography
// For this project, a few simple styles on the page itself will suffice.
const proseStyles = `
.prose h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 2em;
  margin-bottom: 1em;
}
.prose p {
  margin-bottom: 1.25em;
  line-height: 1.7;
}
`;
// Note: This style injection is illustrative. You would typically add this to a CSS file.
// For this use case, we are adding the styling classes directly into the markup via post.content
