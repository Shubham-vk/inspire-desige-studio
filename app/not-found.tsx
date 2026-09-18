import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-32 text-center">
      <h1 className="text-4xl font-medium">Project not found</h1>

      <p className="mt-4 text-neutral-500">
        The project you're looking for doesn't exist.
      </p>

      <Link href="/" className="mt-8 inline-block underline">
        Back to home
      </Link>
    </div>
  );
}
