import Image from 'next/image';

export default function GalleryPage() {
  const images = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
          Multimedia Gallery
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          A glimpse into our vibrant community, moments of worship, and fun times together.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((id) => (
          <div key={id} className="group relative aspect-square overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <Image
              src={`https://placehold.co/600x600.png`}
              alt={`Gallery image ${id}`}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 group-hover:scale-110"
              data-ai-hint="youth worship community"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </div>
  );
}
