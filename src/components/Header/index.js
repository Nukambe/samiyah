import { options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';
import NavBar from "../NavBar";
import Hamburger from '../Hamburger';
import Socials from "../Socials";

export default async function Header() {
  const session = await getServerSession(options);

  const pages = [
    { title: "Home", path: "/" },
    { title: "Stats", path: "/stats" },
    { title: "Clubs", path: "/clubs" },
    { title: "Tournaments", path: "/tournaments" },
    // { title: "Awards", path: "/awards" },
    { title: "Contact", path: "/contact" },
  ];

  if (session?.user) pages.push({ title: "Dashboard", path: "/dashboard" })

  return (
    <header className="bg-gray-800 flex items-center justify-between sm:justify-evenly h-16 px-6">
      <div className='hidden sm:block'>
        <NavBar pages={pages} className='space-x-4 hidden sm:flex' />
      </div>
      <Socials />
      <div className='block sm:hidden'>
        <Hamburger pages={pages} />
      </div>
    </header>
  );
}
