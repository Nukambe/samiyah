import Socials from "../Socials";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-700 mt-auto h-16 flex items-center justify-evenly">
      <div className="flex justify-center space-x-6 md:order-2">
        <Socials />
      </div>
      <div className="mt-8 md:order-1 md:mt-0">
        <p className="text-center text-xs leading-5 text-gray-500">
          &copy; 2023 Wesley Chappell
        </p>
      </div>
    </footer>
  );
}
