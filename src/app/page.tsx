import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { blogPosts, events } from '@/lib/data';
import { ArrowRight, Calendar, HandHeart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const upcomingEvents = events.slice(0, 3);
  const latestPosts = blogPosts.slice(0, 2);

  return (
    <div className="flex flex-col">
      <section className="bg-secondary">
        <div className="container mx-auto flex flex-col items-center justify-center px-4 py-20 text-center md:py-32">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Bethel Youth United
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
            A classic, creative, and modern community for the youth. Join us as we grow in faith and fellowship.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/events">Upcoming Events</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="events" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-headline text-3xl font-bold md:text-4xl">Upcoming Events</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="font-headline">{event.title}</CardTitle>
                  <CardDescription className="flex items-center pt-2">
                    <Calendar className="mr-2 h-4 w-4" />
                    {event.date} @ {event.time}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p>{event.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="p-0">
                    <Link href="/events">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-headline text-3xl font-bold md:text-4xl">From the Blog</h2>
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            {latestPosts.map((post) => (
              <Card key={post.id} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl md:flex-row">
                <div className="relative h-48 w-full md:h-auto md:w-1/3">
                  <Image src={post.imageUrl} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="faith abstract" />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <CardTitle className="font-headline text-2xl">{post.title}</CardTitle>
                    <CardDescription className="mt-2">{post.date} by {post.author}</CardDescription>
                    <CardContent className="mt-4 p-0">
                      <p className="text-muted-foreground">{post.excerpt}</p>
                    </CardContent>
                  </div>
                  <CardFooter className="mt-4 p-0">
                    <Button asChild variant="link" className="p-0">
                      <Link href={`/blog/${post.slug}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-headline text-3xl font-bold md:text-4xl">Our Gallery</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={`https://placehold.co/600x600.png`}
                  alt={`Gallery image ${i}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                  data-ai-hint="youth group community"
                />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="prayer" className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto flex flex-col items-center px-4 text-center">
          <HandHeart className="h-12 w-12" />
          <h2 className="mt-4 font-headline text-3xl font-bold md:text-4xl">Need Prayer?</h2>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            We believe in the power of prayer. Submit your requests, and our team will stand with you in faith.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary">
              <Link href="/prayer">Submit a Prayer Request</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
