"use client";

import { usePathname } from "next/navigation";
import NavBarLink from "./NavBarLink";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <NavBarLink title={"Home"} />
          <NavBarLink title={"Stats"} />
          <NavBarLink title={"Clubs"} />
          <NavBarLink title={"Tournaments"} />
          <NavBarLink title={"Awards"} />
          <NavBarLink title={"Contact"} />
          <NavBarLink title={"Dashboard"} />
        </li>
      </ul>
    </nav>
  );
}
