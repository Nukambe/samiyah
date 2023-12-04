"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar({ pages, className, onClose }) {
  const pathname = usePathname();

  return (
    <div className={className}>
      {pages.map((page, index) => (
        <Link
          key={index}
          href={page.path}
          className={`px-3 py-2 font-medium text-gray-300  hover:text-white ${pathname === page.path
            ? "bg-gray-900 cursor-default"
            : "hover:bg-gray-700"
            }`}
          onClick={onClose}
        >
          {page.title}
        </Link>
      ))}
    </div>
  );
}
