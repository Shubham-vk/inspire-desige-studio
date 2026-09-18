import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";

type AboutProps = {
  title?: string;
  description?: string;
  image?: unknown;
};

export default function About({ title, description, image }: AboutProps) {
  const imageUrl = image
    ? urlFor(image).width(1200).height(900).fit("crop").url()
    : null;

  return (
    <section className="border-t border-neutral-200">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
        <div>
          {title && (
            <h2 className="text-3xl font-medium tracking-tight">{title}</h2>
          )}

          {description && (
            <p className="mt-6 whitespace-pre-line leading-8 text-neutral-600">
              {description}
            </p>
          )}
        </div>

        {imageUrl && (
          <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
            <Image
              src={imageUrl}
              alt={title || "About Inspire Design Studio"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}
      </div>
    </section>
  );
}
