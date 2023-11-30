import { getDocuments } from "@/db";

export default async function StatsPage() {
  const attributes = await getDocuments("attributes");

  return (
    <div className="bg-gray-900 h-full py-24 sm:py-32">
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
          className="mt-16"
        >
          {attributes.map((attribute) => (
            <li
              key={attribute.id}
              className=" mx-auto mt-4 flex items-center justify-between w-80"
            >
              <p className="text-sm leading-6 text-gray-400">
                {attribute.attribute}
              </p>
              <h3 className="font-semibold leading-7 tracking-tight text-white">
                {attribute.value}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
