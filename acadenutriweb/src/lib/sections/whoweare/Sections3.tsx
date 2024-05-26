import Image from 'next/image';
import { IoCheckmark } from 'react-icons/io5';

import { GrayBg } from 'src/lib/styled/Background';
import { LightGreenBox, Section } from 'src/lib/styled/Containers';
import { Column, Row } from 'src/lib/styled/Flex';
import { ImageContainer } from 'src/lib/styled/Images';
import womanImg from 'src/public/images/woman.png';

const Section3 = () => {
  return (
    <GrayBg>
      <Section p="0 2rem 2rem">
        <Row responsive gap={10}>
          <Column w="30%">
            <ImageContainer y="-4rem" size={1.4}>
              <Image width={300} src={womanImg} alt="" />
            </ImageContainer>
          </Column>
          <Column left top w="60%" gap={8}>
            <h1>With AcadeNutri, you can access the best in just one place:</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation
            </p>
            <Row left flewrap>
              <LightGreenBox w="30%">
                <IoCheckmark size={24} />
                Nutritionists
              </LightGreenBox>
              <LightGreenBox w="30%">
                <IoCheckmark size={24} />
                Pharmacies
              </LightGreenBox>
              <LightGreenBox w="30%">
                <IoCheckmark size={24} />
                Restaurants
              </LightGreenBox>
              <LightGreenBox w="30%">
                <IoCheckmark size={24} />
                Gyms
              </LightGreenBox>
              <LightGreenBox w="30%">
                <IoCheckmark size={24} />
                Supermarkets
              </LightGreenBox>
              <LightGreenBox w="35%">
                <IoCheckmark size={24} />
                Food Supplement Stores
              </LightGreenBox>
            </Row>
          </Column>
        </Row>
      </Section>
    </GrayBg>
  );
};

export default Section3;
