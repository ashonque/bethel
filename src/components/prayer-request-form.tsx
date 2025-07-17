'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { submitPrayerRequest } from '@/app/actions';

const prayerRequestSchema = z.object({
  name: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email." }).optional().or(z.literal('')),
  request: z.string().min(10, {
    message: 'Prayer request must be at least 10 characters.',
  }),
});

export function PrayerRequestForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof prayerRequestSchema>>({
    resolver: zodResolver(prayerRequestSchema),
    defaultValues: {
      name: '',
      email: '',
      request: '',
    },
  });

  async function onSubmit(values: z.infer<typeof prayerRequestSchema>) {
    setIsSubmitting(true);
    try {
      const result = await submitPrayerRequest(values);
      if (result.success) {
        toast({
          title: "Success!",
          description: "Your prayer request has been submitted.",
        });
        form.reset();
      } else {
        // This part is for potential server-side validation errors in the future
        toast({
          variant: 'destructive',
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request. Please try again.",
        });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: "Submission failed",
        description: "Could not submit your prayer request. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className="mt-12 w-full shadow-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-8 pt-6">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Name (Optional)</FormLabel>
                        <FormControl>
                            <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormDescription>
                            You can remain anonymous if you wish.
                        </FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Email (Optional)</FormLabel>
                        <FormControl>
                            <Input placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormDescription>
                            If you'd like us to follow up with you.
                        </FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
              <FormField
                control={form.control}
                name="request"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Prayer Request</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us how we can pray for you..."
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Submit Request
              </Button>
            </CardFooter>
          </form>
        </Form>
    </Card>
  );
}
