"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar({ pages }) {
  const pathname = usePathname();

  return (
    <div className="flex space-x-4">
      {pages.map((page, index) => (
        <Link
          key={index}
          href={page.path}
          className={`rounded-md px-3 py-2 text-sm font-medium text-gray-300  hover:text-white ${pathname === page.path
            ? "bg-gray-900 cursor-default"
            : "hover:bg-gray-700"
            }`}
        >
          {page.title}
        </Link>
      ))}
    </div>
  );
}
