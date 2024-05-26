import Image from 'next/image';

import { DarkGreenBg } from 'src/lib/styled/Background';
import { Container, MainOutilineBox, Section } from 'src/lib/styled/Containers';
import { Column, Row } from 'src/lib/styled/Flex';
import { TransparentText } from 'src/lib/styled/Typograph';
import praticeIcon1 from 'src/public/icons/praticeIcon1.svg';
import praticeIcon2 from 'src/public/icons/praticeIcon2.svg';
import praticeIcon3 from 'src/public/icons/praticeIcon3.svg';
import praticeIcon4 from 'src/public/icons/praticeIcon4.svg';
import praticeIcon5 from 'src/public/icons/praticeIcon5.svg';
import praticeIcon6 from 'src/public/icons/praticeIcon6.svg';

const Section2 = () => {
  return (
    <DarkGreenBg>
      <Section>
        <Container>
          <Row responsive gap={30}>
            <Column responsive w="50%" left gap={8}>
              <TransparentText size={30}>Nutritionists</TransparentText>
              <h1>Revolutionize Your Nutrition Practice</h1>
              <p>
                Diet Plans, More Patients, Anamnesis, More Profit, Anthropometries! Introducing our
                innovative nutritionist software that empowers you to create personalized diet
                plans, streamline patient intake and assessment processes, and maximize your revenue
                potential. With advanced features like anthropometric measurements and progress
                tracking, our software is the ultimate tool for nutritionists looking to take their
                practice to the next level. Join the nutritionist revolution today!
              </p>
            </Column>
            <Row flewrap w="40%" cols={3}>
              <MainOutilineBox w="150px" h="125px">
                <Column>
                  <Image width={42} src={praticeIcon1} alt="" />
                  <h4>Diet Plans</h4>
                </Column>
              </MainOutilineBox>
              <MainOutilineBox w="150px" h="125px">
                <Column>
                  <Image width={42} src={praticeIcon2} alt="" />
                  <h4>Diet Plans</h4>
                </Column>
              </MainOutilineBox>
              <MainOutilineBox w="150px" h="125px">
                <Column>
                  <Image width={42} src={praticeIcon3} alt="" />
                  <h4>Diet Plans</h4>
                </Column>
              </MainOutilineBox>
              <MainOutilineBox w="150px" h="125px">
                <Column>
                  <Image width={42} src={praticeIcon4} alt="" />
                  <h4>Diet Plans</h4>
                </Column>
              </MainOutilineBox>
              <MainOutilineBox w="150px" h="125px">
                <Column>
                  <Image width={42} src={praticeIcon5} alt="" />
                  <h4>Diet Plans</h4>
                </Column>
              </MainOutilineBox>
              <MainOutilineBox w="150px" h="125px">
                <Column>
                  <Image width={42} src={praticeIcon6} alt="" />
                  <h4>Diet Plans</h4>
                </Column>
              </MainOutilineBox>
            </Row>
          </Row>
        </Container>
      </Section>
    </DarkGreenBg>
  );
};

export default Section2;
