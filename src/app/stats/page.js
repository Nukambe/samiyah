import { getDocuments } from "@/db";

export default async function StatsPage() {
  const attributes = await getDocuments("attributes");

  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            STATS
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            Explore my volleyball journey and discover the attributes that set
            me apart on the court—precision, determination, and passion.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {attributes.map((attribute) => (
            <li
              key={attribute.id}
              className="rounded-2xl bg-gray-800 px-8 py-10"
            >
              {/* <img
                className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
                src={person.imageUrl}
                alt=""
              /> */}
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
                {attribute.value}
              </h3>
              <p className="text-sm leading-6 text-gray-400">
                {attribute.attribute}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
