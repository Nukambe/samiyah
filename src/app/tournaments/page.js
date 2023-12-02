import PageContainer from "@/components/PageContainer";
import TournamentCard from '@/components/Tournament/TournamentCard';

export default function TournamentsPage() {
  const tournaments = [
    {
      name: 'Nations League',
      date: '2023-01',
      rank: 1
    },
    {
      name: 'Olympic Games',
      date: '2023-01',
      rank: 2
    },
    {
      name: 'World Championship',
      date: '2023-01',
      rank: 3
    },
    {
      name: 'World Cup',
      date: '2023-01',
      rank: 4
    },
    {
      name: 'European Championship',
      date: '2023-01',
      rank: 16
    }
  ]

  return (
    <PageContainer header="Tournaments" description="Explore the pinnacle moments of my volleyball journey, from intense competitions to triumphant victories that define my path in the sport.">
      <ul role="list"
        className="space-y-4"
      >
        {tournaments.map((tourney, index) => (
          <li key={index}>
            <TournamentCard tourney={tourney} />
          </li>
        ))}
      </ul>
    </PageContainer>
  );
}
