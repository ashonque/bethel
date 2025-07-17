import { PrayerRequestForm } from '@/components/prayer-request-form';
import { HandHeart } from 'lucide-react';

export default function PrayerPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto flex min-h-[calc(100vh-112px)] items-center justify-center px-4 py-16">
        <div className="w-full max-w-2xl">
          <div className="text-center">
            <HandHeart className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight md:text-5xl">
              Prayer Requests
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We believe in the power of prayer. Let us know how we can pray for you. All requests are kept confidential.
            </p>
          </div>
          <PrayerRequestForm />
        </div>
      </div>
    </div>
  );
}
