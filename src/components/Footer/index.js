import Socials from "../Socials";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-700 h-16 flex items-center justify-evenly">
      <div className="md:order-1 md:mt-0">
        <a href="https://wesleychappell.com" target="_blank" rel="noreferrer nofollow"
          className="text-center text-xs leading-5 text-gray-500">
          &copy; 2023 Wesley Chappell
        </a>
      </div>
    </footer>
  );
}
