import PageTitle from 'src/lib/base/PageTitle';
import Footer from 'src/lib/components/Footer';
import Header from 'src/lib/components/Header';
import Section2 from 'src/lib/sections/retails/Section2';
import { BackgroundImage } from 'src/lib/styled/Background';
import { Page, PageContent } from 'src/lib/styled/Containers';
import ellipseBg3 from 'src/public/images/ellipseBg2.svg';

const RetailPages = () => {
  return (
    <Page>
      <PageContent>
        <BackgroundImage src={ellipseBg3.src} p="0 0 4rem">
          <Header />
          <PageTitle title="How it works?" />
        </BackgroundImage>
        <Section2 />
        <Footer />
      </PageContent>
    </Page>
  );
};

export default RetailPages;
