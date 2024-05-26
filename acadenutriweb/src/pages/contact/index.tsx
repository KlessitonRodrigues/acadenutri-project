import PageTitle from 'src/lib/base/PageTitle';
import Footer from 'src/lib/components/Footer';
import Header from 'src/lib/components/Header';
import ContactForm from 'src/lib/forms/Contact';
import { Page, PageContent, Section } from 'src/lib/styled/Containers';

const ContactPage = () => {
  return (
    <Page>
      <PageContent>
        <Header />
        <PageTitle title="Contact" />
        <Section p="5rem 0">
          <ContactForm />
        </Section>
        <Footer />
      </PageContent>
    </Page>
  );
};

export default ContactPage;
