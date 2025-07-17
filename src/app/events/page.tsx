import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { events } from '@/lib/data';
import { Calendar, MapPin } from 'lucide-react';

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
          Events Calendar
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Join us for our upcoming events! There's always something happening at BYU.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <Card key={event.id} className="flex flex-col transition-shadow duration-300 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{event.title}</CardTitle>
              <CardDescription className="flex items-center pt-2 text-sm text-muted-foreground">
                <Calendar className="mr-2 h-4 w-4" />
                {event.date} at {event.time}
              </CardDescription>
               <CardDescription className="flex items-center pt-1 text-sm text-muted-foreground">
                <MapPin className="mr-2 h-4 w-4" />
                {event.location}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>{event.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
