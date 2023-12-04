import PageContainer from "@/components/PageContainer";
import ContactCard from "@/components/Contact/ContactCard";

export default function ContactPage() {
  return (
    <PageContainer
      header="Contact"
      description="Have questions or opportunities? Reach out here. Your messages are important to me, and I'm eager to hear from you!"
    >
      <ContactCard
        title="Youtube"
        link="https://www.youtube.com/playlist?list=PLFLQmPWwG6DhPPFCn90c_aIKTn0evPiT5"
        className="bg-red-400"
      />
      <ContactCard
        title="Samiyah@Boazcc.com"
        link="mailto:samiyah@boazcc.com"
        className="bg-green-500"
      />
      <ContactCard
        title="NCSA College Recruiting"
        link="https://www.ncsasports.org/womens-volleyball-recruiting/maryland/bel-air/patterson-mill-high-school/samiyah-hubbard"
        className="bg-blue-500"
      />
    </PageContainer>
  );
}
