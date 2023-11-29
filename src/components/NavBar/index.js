"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const pages = [
    { title: "Home", path: "/" },
    { title: "Stats", path: "/stats" },
    { title: "Clubs", path: "/clubs" },
    { title: "Tournaments", path: "/tournaments" },
    { title: "Awards", path: "/awards" },
    { title: "Contact", path: "/contact" },
    { title: "Dashboard", path: "/dashboard" },
  ];

  return (
    <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-end">
        <div className="flex space-x-4">
          {pages.map((page, index) => (
            <Link
              key={index}
              href={page.path}
              className={`rounded-md px-3 py-2 text-sm font-medium text-gray-300  hover:text-white ${
                pathname === page.path
                  ? "bg-gray-900 cursor-default"
                  : "hover:bg-gray-700"
              }`}
            >
              {page.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
