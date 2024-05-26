import Footer from 'src/lib/components/Footer';
import Header from 'src/lib/components/Header';
import Section1 from 'src/lib/sections/gyms/Section1';
import Section2 from 'src/lib/sections/nutritionist/Section2';
import { BackgroundImage } from 'src/lib/styled/Background';
import { Page, PageContent } from 'src/lib/styled/Containers';
import nutritionistBg from 'src/public/images/nutritionistBg.png';

const NutritionistPage = () => {
  return (
    <Page>
      <PageContent>
        <BackgroundImage p="0 0 20rem" src={nutritionistBg.src}>
          <Header />
          <Section1 />
        </BackgroundImage>
        <Section2 />
        <Footer />
      </PageContent>
    </Page>
  );
};

export default NutritionistPage;
