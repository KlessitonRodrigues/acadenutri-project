import Image from 'next/image';

import useAccount from 'src/hooks/useAccount';
import PageTitle from 'src/lib/base/PageTitle';
import AppHeader from 'src/lib/components/AppHeader';
import Page from 'src/lib/components/Page';
import { Card, Section } from 'src/lib/styled/Containers';
import { Column, Row } from 'src/lib/styled/Flex';
import { AvatarBig } from 'src/lib/styled/User';
import homeCardImg1 from 'src/public/images/homeCard1.svg';
import homeCardImg2 from 'src/public/images/homeCard2.svg';
import homeCardImg3 from 'src/public/images/homeCard3.svg';
import homeCardImg4 from 'src/public/images/homeCard4.svg';
import homeCardImg5 from 'src/public/images/homeCard5.svg';
import homeCardImg6 from 'src/public/images/homeCard6.svg';
import homeCardImg7 from 'src/public/images/homeCard7.svg';
import profileImg from 'src/public/images/profile.jpg';

const HomePages = () => {
  const { loading, user } = useAccount();

  return (
    <Page loading={loading}>
      <AppHeader />
      <PageTitle title="Home" />
      <Section p="2rem">
        <Column gap={8}>
          <AvatarBig src={profileImg.src} />
          <h1>Welcome {user?.name}</h1>
          <p>Choose one option below</p>
          <Row responsive flewrap gap={4}>
            <Card w="25%">
              <Image src={homeCardImg1} alt="" />
              <p>My Patients</p>
            </Card>
            <Card w="25%">
              <Image src={homeCardImg2} alt="" />
              <p>Register Patient</p>
            </Card>
            <Card w="25%">
              <Image src={homeCardImg3} alt="" />
              <p>General Chat</p>
            </Card>
            <Card w="25%">
              <Image src={homeCardImg4} alt="" />
              <p>Appointment</p>
            </Card>
            <Card w="25%">
              <Image src={homeCardImg5} alt="" />
              <p>My Materials</p>
            </Card>
            <Card w="25%">
              <Image src={homeCardImg6} alt="" />
              <p>Finacial Management</p>
            </Card>
            <Card w="25%">
              <Image src={homeCardImg7} alt="" />
              <p>Report</p>
            </Card>
          </Row>
        </Column>
      </Section>
    </Page>
  );
};

export default HomePages;
