import PageContainer from "@/components/PageContainer";
import ContactCard from "@/components/Contact/ContactCard";

export default function ContactPage() {
  return (
    <PageContainer
      header="Contact"
      description="Have questions or opportunities? Reach out here. Your messages are important to me, and I'm eager to hear from you!"
    >
      <ContactCard
        title='Facebook'
        link='facebook.com'
        className='bg-blue-400'
      />
      <ContactCard
        title='Twitter'
        link='twitter.com'
        className=' bg-cyan-400'
      />
      <ContactCard
        title='Instagram'
        link='instagram.com'
        className='bg-orange-400'
      />
      <ContactCard
        title='Youtube'
        link='youtube.com'
        className='bg-red-400'
      />
      <ContactCard
        title='samiyah@email.com'
        link='mailto:samiyah@email.com'
        className='bg-green-500'
      />
    </PageContainer>
  );
}
