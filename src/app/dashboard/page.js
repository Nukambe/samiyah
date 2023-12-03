import { revalidatePath } from "next/cache";
import PageContainer from "@/components/PageContainer";
import DashboardSection from "@/components/Dashboard/DashboardSection";
import DashboardTextInput from "@/components/Dashboard/DashboardTextInput";
import DashboardSubmit from "@/components/Dashboard/DashboardSubmit";
import DashboardClubs from "@/components/Dashboard/DashboardClubs";


export default function DashboardPage() {
  const handleStats = async (formData) => {
    'use server'

    revalidatePath('/stats')
  }

  const handleClubs = async (formData) => {
    'use server'

    revalidatePath('/clubs')
  }

  const handleTournaments = async (formData) => {
    'use server'

    revalidatePath('/tournaments')
  }

  const clubs = []

  return (
    <PageContainer
      header="Dashboard"
      description=""
    >
      <DashboardSection title='Stats' action={handleStats}>
        <DashboardTextInput label='Description' />
        <DashboardTextInput label='Nationality' />
        <DashboardTextInput label='Position' />
        <DashboardTextInput label='Age' />
        <DashboardTextInput label='Height' />
        <DashboardTextInput label='Weight' />
        <DashboardTextInput label='Spike' />
        <DashboardTextInput label='Block' />
        <DashboardTextInput label='Dominant Hand' />
      </DashboardSection>
      <DashboardSection title='Clubs' action={handleClubs}>
        <DashboardClubs />
      </DashboardSection>
    </PageContainer>
  );
}
