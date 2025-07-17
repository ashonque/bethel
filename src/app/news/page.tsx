import { Card, CardContent } from "@/components/ui/card";
import { Newspaper } from "lucide-react";

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-20 md:py-32">
      <div className="text-center">
        <Newspaper className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-6 font-headline text-3xl font-bold tracking-tight md:text-4xl">
          News & Updates
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Stay up to date with the latest news from Bethel Youth United.
        </p>
      </div>
       <Card className="mt-12">
        <CardContent className="pt-6">
            <div className="flex items-center justify-center h-64 border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">News and updates coming soon.</p>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
