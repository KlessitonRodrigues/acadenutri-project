import Footer from 'src/lib/components/Footer';
import Header from 'src/lib/components/Header';
import Section1 from 'src/lib/sections/whoweare/Section1';
import Section2 from 'src/lib/sections/whoweare/Section2';
import Section3 from 'src/lib/sections/whoweare/Sections3';
import { PeopleBg } from 'src/lib/styled/Background';
import { Page, PageContent } from 'src/lib/styled/Containers';

const WhoWeArePage = () => {
  return (
    <Page>
      <PageContent>
        <PeopleBg>
          <Header />
          <Section1 />
        </PeopleBg>
        <Section2 />
        <Section3 />
        <Footer />
      </PageContent>
    </Page>
  );
};

export default WhoWeArePage;
