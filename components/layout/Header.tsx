import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Navbar from "./Navbar";

type HeaderProps = {
  studioName?: string;
  logo?: any;
};
export default function Header({ studioName, logo }: HeaderProps) {
  const logoUrl = logo ? urlFor(logo).width(50).height(50).url() : null;

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl h-[81px] items-center justify-between px-6 py-5">
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

        <Navbar />
      </div>
    </header>
  );
}
