import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="relative isolate overflow-hidden h-[900px] bg-gray-900 pb-16 pt-14 sm:pb-20">
      <Image
        src="/landing-bg.webp"
        alt="olympic volleybal"
        width="1920"
        height="1080"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 h-full w-full object-cover bg-black/50" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Samiyah Hubbard
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Step into the world of Samiyah, a high school volleyball prodigy
              ready to redefine the game. Witness passion, skill, and the
              pursuit of greatness unfold in every spike and serve. Are you
              ready to be part of the journey?
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/stats"
                className="rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Dive In <span className="animate-pulse">🏐</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const revalidate = 60;
