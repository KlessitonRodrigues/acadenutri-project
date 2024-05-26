import Footer from 'src/lib/components/Footer';
import Header from 'src/lib/components/Header';
import Section1 from 'src/lib/sections/trainer/Section1';
import Section2 from 'src/lib/sections/trainer/Section2';
import { BackgroundImage } from 'src/lib/styled/Background';
import { Page, PageContent } from 'src/lib/styled/Containers';
import trainerBg from 'src/public/images/trainerBg.png';

const TrainerPages = () => {
  return (
    <Page>
      <PageContent>
        <BackgroundImage p="0 0 20rem" src={trainerBg.src}>
          <Header />
          <Section1 />
        </BackgroundImage>
        <Section2 />
        <Footer />
      </PageContent>
    </Page>
  );
};

export default TrainerPages;
