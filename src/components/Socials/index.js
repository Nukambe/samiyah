import { EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Socials() {
  const socialmedia = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="gray"
          viewBox="0 0 24 24"
        >
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      ),
      link: "https://www.youtube.com/playlist?list=PLFLQmPWwG6DhPPFCn90c_aIKTn0evPiT5",
    },
    {
      icon: <EnvelopeIcon className="w-9 text-gray-500" />,
      link: "mailto:samiyah@boazcc.com",
    },
    {
      icon: (
        <div className="bg-gray-500 text-gray-800 rounded-sm px-2 font-bold">
          NCSA
        </div>
      ),
      link: "https://www.ncsasports.org/womens-volleyball-recruiting/maryland/bel-air/patterson-mill-high-school/samiyah-hubbard",
    },
  ];

  return (
    <div className="flex justify-center space-x-6 md:order-2">
      {socialmedia.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noreferrer nofollow"
          className="flex items-center"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
