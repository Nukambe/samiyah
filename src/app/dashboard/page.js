import { revalidatePath } from "next/cache";
import PageContainer from "@/components/PageContainer";
import DashboardSection from "@/components/Dashboard/DashboardSection";
import DashboardClubs from "@/components/Dashboard/DashboardClubs";
import DashboardTournaments from "@/components/Dashboard/DashboardTournaments";

import { getAllDocuments, insertDocuments } from "@/db";
import DashboardStats from "@/components/Dashboard/DashboardStats";


export default async function DashboardPage() {
  const handleStats = async (formData) => {
    'use server'
    const stats = [];

    for (let i = 0; i < 20; i++) {
      const attribute = formData.get(`stat-${i}-attribute`);
      const value = formData.get(`stat-${i}-value`);

      if (!attribute || !value) break;

      stats.push({ attribute, value });
    };

    const res = await insertDocuments('attributes', stats);

    revalidatePath('/stats')
  }

  const handleClubs = async (formData) => {
    'use server'
    const clubs = [];

    for (let i = 0; i < 20; i++) {
      const name = formData.get(`club-${i}-name`);
      const start = formData.get(`club-${i}-start`);
      const end = formData.get(`club-${i}-end`);
      const current = formData.get(`club-${i}-current`);

      if (!name || !start || !end) break;

      clubs.push({ name, start, end, current: current ? 'true' : 'false' });
    };

    const res = await insertDocuments('clubs', clubs);

    revalidatePath('/clubs')
  }

  const handleTournaments = async (formData) => {
    'use server'
    const tournaments = [];

    for (let i = 0; i < 20; i++) {
      const name = formData.get(`tour-${i}-name`);
      const date = formData.get(`tour-${i}-date`);
      const rank = formData.get(`tour-${i}-rank`);

      if (!name || !date || !rank) break;

      tournaments.push({ name, date, rank });
    };

    const res = await insertDocuments('tournaments', tournaments);

    revalidatePath('/tournaments')
  }

  const documents = await getAllDocuments();
  documents.attributes = documents.attributes.map(attribute => ({ attribute: attribute.attribute, value: attribute.value }));
  documents.clubs = documents.clubs.map(club => ({ name: club.name, start: club.start, end: club.end, current: club.current === 'true' }));
  documents.tournaments = documents.tournaments.map(tour => ({ name: tour.name, date: tour.date, rank: tour.rank }));

  return (
    <PageContainer
      header="Dashboard"
      description=""
    >
      <DashboardSection title='Stats' action={handleStats}>
        <DashboardStats attributes={documents.attributes} />
      </DashboardSection>
      <DashboardSection title='Clubs' action={handleClubs}>
        <DashboardClubs sClubs={documents.clubs} />
      </DashboardSection>
      <DashboardSection title='Tournaments' action={handleTournaments}>
        <DashboardTournaments tourneys={documents.tournaments} />
      </DashboardSection>
    </PageContainer>
  );
}
