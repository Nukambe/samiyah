import PageContainer from "@/components/PageContainer"
import TimelineItem from "@/components/Timeline/TimelineItem"

export default function ClubsPage() {
  const timeline = [
    {
      name: 'Mizuno',
      start: '2023-01',
      end: '',
      current: true
    },
    {
      name: 'Excel Volleyball Club',
      start: '2022-01',
      end: '2023-01',
      current: false
    },
    {
      name: 'CCVC',
      start: '2021-01',
      end: '2022-01',
      current: false
    }
  ]

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
