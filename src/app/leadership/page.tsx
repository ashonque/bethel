import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { leaders } from '@/lib/data';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function LeadershipPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
          Our Leadership
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Meet the dedicated team guiding our youth in their walk with Christ.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {leaders.map((leader) => (
          <Card key={leader.id} className="overflow-hidden transition-shadow duration-300 hover:shadow-xl">
            <div className="flex flex-col sm:flex-row">
              <div className="relative h-64 w-full sm:h-auto sm:w-2/5">
                <Image
                  src={leader.imageUrl}
                  alt={leader.name}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint="portrait professional"
                />
              </div>
              <div className="flex flex-col p-6 sm:w-3/5">
                <CardHeader className="p-0">
                  <CardTitle className="font-headline text-2xl">{leader.name}</CardTitle>
                  <p className="text-md font-semibold text-primary/80">{leader.role}</p>
                </CardHeader>
                <CardContent className="flex-grow p-0 mt-4">
                  <p className="text-muted-foreground">{leader.bio}</p>
                </CardContent>
                <div className="mt-4">
                    <Button asChild variant="outline">
                        <Link href={`mailto:${leader.email}`}>
                            <Mail className="mr-2 h-4 w-4" />
                            Contact
                        </Link>
                    </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
