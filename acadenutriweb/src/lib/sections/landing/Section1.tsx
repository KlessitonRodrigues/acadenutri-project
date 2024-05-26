import Image from 'next/image';
import Link from 'next/link';

import { GradientBtn } from 'src/lib/styled/Buttons';
import { GreenBox, Section } from 'src/lib/styled/Containers';
import { Column, Row } from 'src/lib/styled/Flex';
import { ImageContainer } from 'src/lib/styled/Images';
import { BigText } from 'src/lib/styled/Typograph';
import playStoreImg from 'src/public/images/appstore.svg';
import googlePlayImg from 'src/public/images/playstore.svg';
import qrCodeImg from 'src/public/images/qrCode.svg';
import phoneImg from 'src/public/images/ring.svg';

const Section1 = () => {
  return (
    <Section p="0 2rem 5rem">
      <Row responsive gap={10}>
        <Column responsive w="30%" gap={10}>
          <BigText size={15}>
            <strong>i&lsquo;m Juliana Your Personal Nutritionist</strong>
          </BigText>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation
          </p>
          <Link href="auth/signup">
            <GradientBtn>Create New Account</GradientBtn>
          </Link>
        </Column>
        <Column responsive w="50%">
          <ImageContainer size={1.1}>
            <Image width={650} src={phoneImg} alt="" />
          </ImageContainer>
          <GreenBox>
            <Row responsive gap={6}>
              <b>DOWNLOAD APP NOW</b>
              <Image width={160} src={googlePlayImg} alt="" />
              <Image width={160} src={playStoreImg} alt="" />
            </Row>
          </GreenBox>
        </Column>
        <Column responsive w="20%">
          <ImageContainer y="12.5rem">
            <Image width={250} src={qrCodeImg} alt="" />
          </ImageContainer>
        </Column>
      </Row>
    </Section>
  );
};

export default Section1;
