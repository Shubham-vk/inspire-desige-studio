import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

type HeaderProps = {
  studioName?: string;
  logo?: any;
};
export default function Header({ studioName, logo }: HeaderProps) {
  const logoUrl = logo ? urlFor(logo).width(50).height(50).url() : null;

  return (
    <header className="border-b border-neutral-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-lg font-medium tracking-tight">
          <div className="flex items-center gap-4">
            {logoUrl && (
              <Image
                src={logoUrl}
                alt={studioName || "Studio Logo"}
                width={40}
                height={40}
                priority
                className="object-cover"
              />
            )}

            {studioName}
          </div>
        </Link>

        <nav className="flex gap-6 text-sm">
          <Link
            href="/"
            className="text-neutral-700 font-semibold hover:text-black"
          >
            Home
          </Link>

          <a
            href="#projects"
            className="text-neutral-700 font-semibold hover:text-black"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-neutral-700 font-semibold hover:text-black"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
