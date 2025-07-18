import { Card, CardContent } from "@/components/ui/card";
import { Camera } from "lucide-react";
import Image from "next/image";
import { images } from "@/lib/images";

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-20 md:py-32">
      <div className="text-center">
        <Camera className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-6 font-headline text-3xl font-bold tracking-tight md:text-4xl">
          Gallery
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Browse moments from our events and gatherings.
        </p>
      </div>
      <Card className="mt-12">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image) => (
              <div key={image.src} className="relative aspect-square">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
