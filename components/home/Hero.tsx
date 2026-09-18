import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";

type HeroProps = {
  title: string;
  description?: string;
  image?: unknown;
};

export default function Hero({ title, description, image }: HeroProps) {
  const imageUrl = image
    ? urlFor(image).width(1600).height(1000).fit("crop").url()
    : null;

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-medium tracking-tight md:text-6xl">
          {title}
        </h1>

        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            {description}
          </p>
        )}
      </div>

      {imageUrl && (
        <div className="relative mt-12 aspect-[16/9] overflow-hidden bg-neutral-100">
          <Image
            src={imageUrl}
            alt={title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      )}
    </section>
  );
}
