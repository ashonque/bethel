import { Button } from '@/components/ui/button';
import { ArrowRight, CreditCard } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-background">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start text-left">
              <h1 className="font-headline text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                We Provide You With A Safe And Reliable Payment Solution
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
              </p>
              <div className="mt-8 flex gap-4">
                <Button size="lg">Get Started</Button>
                <Button size="lg" variant="outline">Learn More</Button>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <Image
                src="/logo.jpg"
                alt="Payment Solution"
                width={400}
                height={400}
                className="rounded-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
