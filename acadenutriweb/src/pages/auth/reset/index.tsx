import PageTitle from 'src/lib/base/PageTitle';
import Footer from 'src/lib/components/Footer';
import Header from 'src/lib/components/Header';
import { ResetPasswordForm } from 'src/lib/forms/ResetPass';
import { Page, PageContent, Section } from 'src/lib/styled/Containers';

const ResetPasswordPage = () => {
  return (
    <Page>
      <PageContent>
        <Header />
        <PageTitle title="Reset Password" />
        <Section>
          <ResetPasswordForm />
        </Section>
        <Footer />
      </PageContent>
    </Page>
  );
};

export default ResetPasswordPage;
