import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { blogPosts } from '@/lib/data';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
          BYU Blog
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Devotionals, updates, and insights from our youth leaders.
        </p>
      </div>

      <div className="mt-12 grid gap-12 md:grid-cols-1">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl md:flex-row">
            <div className="relative h-56 w-full md:h-auto md:w-2/5">
              <Image src={post.imageUrl} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="faith bible" />
            </div>
            <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
              <div>
                <CardHeader className="p-0">
                  <CardTitle className="font-headline text-3xl">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary/80 transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="pt-2 text-sm">
                    {post.date} by {post.author}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-4 p-0">
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
              </div>
              <CardFooter className="mt-6 p-0">
                <Button asChild variant="link" className="p-0">
                  <Link href={`/blog/${post.slug}`}>
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
