import NavBar from "../NavBar";
import Socials from "../Socials";

export default function Header() {
  return (
    <header className="bg-gray-800 flex items-center justify-evenly">
      <NavBar />
      <Socials />
    </header>
  );
}
