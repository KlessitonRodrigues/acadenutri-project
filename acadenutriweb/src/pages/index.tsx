import Footer from 'src/lib/components/Footer';
import Header from 'src/lib/components/Header';
import Page from 'src/lib/components/Page';
import Section1 from 'src/lib/sections/landing/Section1';
import Section2 from 'src/lib/sections/landing/Section2';
import Section3 from 'src/lib/sections/landing/Section3';
import Section4 from 'src/lib/sections/landing/Section4';
import Section5 from 'src/lib/sections/landing/Section5';
import Section6 from 'src/lib/sections/landing/Section6';
import { ElipseBg1 } from 'src/lib/styled/Background';

const RootPage = () => {
  return (
    <Page>
      <ElipseBg1>
        <Header />
        <Section1 />
      </ElipseBg1>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </Page>
  );
};

export default RootPage;
