import { getDocuments } from "@/db";
import PageContainer from "@/components/PageContainer";

export default async function StatsPage() {
  const attributes = await getDocuments("attributes");

  return (
    <PageContainer header="Stats" description="Explore my volleyball journey and discover the attributes that set
    me apart on the court—precision, determination, and passion.">
      <ul
        role="list"
        className="my-auto divide-y divide-gray-700 space-y-2"
      >
        {attributes.map((attribute) => (
          <li
            key={attribute.id}
            className=" mx-auto flex items-center justify-between py-2"
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
    </PageContainer>
  );
}
