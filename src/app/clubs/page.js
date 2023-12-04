import PageContainer from "@/components/PageContainer"
import TimelineItem from "@/components/Timeline/TimelineItem"
import { getDocuments } from "@/db"

export default async function ClubsPage() {
  const timeline = await getDocuments('clubs');

  return (
    <PageContainer
      header="Clubs"
      description="Explore the teams that shaped my volleyball journey. Delve into the diverse experiences, camaraderie, and growth fostered by each club, painting a vivid picture of my volleyball story."
    >
      <div className="mx-auto w-8 h-8 rounded-full bg-white border-solid border-white border-2" />
      <ul role="list">
        {timeline.map((club, index) => (
          <li key={index}>
            <TimelineItem club={club} left={index % 2 === 0} />
          </li>
        ))}
      </ul>
      <div className="mx-auto w-8 h-8 rounded-full bg-white border-solid border-white border-2" />
    </PageContainer>
  )
}
