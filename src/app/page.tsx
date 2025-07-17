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
              <div className="mt-8">
                <p className="text-4xl font-bold">15K+</p>
                <p className="text-muted-foreground">satisfied customers</p>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[600px] -mr-16">
              <Image
                src="https://placehold.co/800x600.png"
                alt="Payment Solution illustration"
                layout="fill"
                objectFit="contain"
                className="drop-shadow-[0_0px_60px_rgba(70,90,255,0.4)]"
                data-ai-hint="glowing orb technology"
              />
               <div className="absolute top-1/2 left-1/2 -translate-x-[80%] -translate-y-[80%] w-60 h-40 bg-gray-900/50 backdrop-blur-md rounded-2xl border border-white/10 p-4 shadow-2xl">
                    <p className="text-sm text-muted-foreground">My Virtual Cards</p>
                    <div className="relative mt-2 w-full h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-3 flex flex-col justify-between">
                         <div className="flex justify-between items-center">
                            <CreditCard className="w-5 h-5 text-white/70" />
                            <p className="text-xs font-mono text-white/70">VISA</p>
                         </div>
                         <div>
                            <p className="text-white font-mono tracking-wider text-sm">**** **** 7677 8545</p>
                             <p className="text-white text-lg font-bold">$1,456</p>
                         </div>
                    </div>
                </div>

                <div className="absolute top-1/2 left-1/2 translate-x-[20%] translate-y-[10%] w-48 bg-gray-900/50 backdrop-blur-md rounded-2xl border border-white/10 p-3 shadow-2xl">
                    <p className="text-sm text-muted-foreground">Transactions</p>
                     <div className="text-xs space-y-2 mt-2">
                        <p>Amazon <span className="float-right">$99.50</span></p>
                        <p>Netflix <span className="float-right">$15.99</span></p>
                        <p>Balance Top up <span className="float-right">$200.00</span></p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
