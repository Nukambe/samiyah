"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBarLink({ title }) {
  const pathname = usePathname();

  return <Link href={`/${title.toLowerCase()}`}>{title}</Link>;
}
