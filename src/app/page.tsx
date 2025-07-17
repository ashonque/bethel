import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Church, MapPin, Send } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-background">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start text-left">
              <h1 className="font-headline text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
                For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                John 3:16
              </p>
              <div className="mt-8 flex gap-4">
                <Button size="lg">Learn More</Button>
              </div>
            </div>
            <div className="relative mx-auto h-[400px] w-[400px] overflow-hidden rounded-full border-8 border-secondary">
              <Image 
                src="/logo.jpg" 
                alt="logo"
                fill
                className="object-cover"
                data-ai-hint="logo abstract"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                <Image
                  src="/bible.jpg"
                  alt="Open Bible"
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  data-ai-hint="bible open"
                />
            </div>
            <div className="text-left">
              <Church className="h-12 w-12 text-primary" />
              <h2 className="mt-6 font-headline text-3xl font-bold tracking-tight md:text-4xl">
                Our Mission
              </h2>
              <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
                Our mission is to foster a vibrant, faith-centered community for young people, guiding them to build a strong, personal relationship with God. We aim to create a supportive environment where they can explore their faith, develop leadership skills, and serve others with love and compassion, inspired by the teachings of Jesus Christ.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="location" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <MapPin className="h-12 w-12 text-primary" />
              <h2 className="mt-6 font-headline text-3xl font-bold tracking-tight md:text-4xl">
                Our Location
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Come and join us for our services and events.
              </p>
              <div className="mt-6 space-y-2 text-lg">
                <p className="text-foreground">Bethel Youth United</p>
                <p className="text-muted-foreground">123 Faith Street</p>
                <p className="text-muted-foreground">Anytown, USA 12345</p>
              </div>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
               <Image 
                src="https://placehold.co/600x400.png" 
                alt="Map to Bethel Youth United"
                fill
                className="object-cover"
                data-ai-hint="map church"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Send className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-6 font-headline text-3xl font-bold tracking-tight md:text-4xl">
              Contact Us
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Have questions or want to get involved? Send us a message!
            </p>
          </div>
          <Card className="mx-auto mt-12 max-w-xl">
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                </div>
                <Textarea placeholder="Your Message" rows={5} />
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
