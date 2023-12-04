import PageContainer from "@/components/PageContainer";
import TournamentCard from "@/components/Tournament/TournamentCard";
import { getDocuments } from "@/db";

export default async function TournamentsPage() {
  // const tournaments = await getDocuments('tournaments');

  return (
    <PageContainer
      header="Tournaments"
      description="Explore the pinnacle moments of my volleyball journey, from intense competitions to triumphant victories that define my path in the sport."
    >
      {/* <ul role="list"
        className="space-y-4"
      >
        {tournaments.map((tourney, index) => (
          <li key={index}>
            <TournamentCard tourney={tourney} />
          </li>
        ))}
      </ul> */}
      <h2 className="text-white font-bold text-4xl">TBD</h2>
    </PageContainer>
  );
}
