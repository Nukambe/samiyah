import { getDocuments } from "@/db";

export default async function Home() {
  const attributes = await getDocuments("attributes");

  return (
    <main>
      <ul>
        {attributes.map((attribute, index) => (
          <li key={index}>
            {attribute.attribute}: {attribute.value}
          </li>
        ))}
      </ul>
    </main>
  );
}

export const revalidate = 60;
