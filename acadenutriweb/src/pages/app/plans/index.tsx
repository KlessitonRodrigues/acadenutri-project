import useAccount from 'src/hooks/useAccount';
import PageTitle from 'src/lib/base/PageTitle';
import Footer from 'src/lib/components/Footer';
import Header from 'src/lib/components/Header';
import PrincingCard from 'src/lib/components/PricingCard';
import { Page, PageContent, Section } from 'src/lib/styled/Containers';
import { Row } from 'src/lib/styled/Flex';
import { pricingCards } from 'src/utils/constants/pricingCards';

const PlansPages = () => {
  const { user } = useAccount();
  return (
    <Page>
      <PageContent>
        <Header />
        <PageTitle title={'Registered Successfully as a ' + user?.function} />
        <Section>
          <Row gap={8} flewrap>
            <PrincingCard cardData={pricingCards[0]} />
            <PrincingCard cardData={pricingCards[1]} />
            <PrincingCard cardData={pricingCards[2]} />
            <PrincingCard cardData={pricingCards[3]} />
          </Row>
        </Section>
        <Footer />
      </PageContent>
    </Page>
  );
};

export default PlansPages;
