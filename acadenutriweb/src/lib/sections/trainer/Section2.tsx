import Image from 'next/image';

import { ElipseBg3 } from 'src/lib/styled/Background';
import { Section } from 'src/lib/styled/Containers';
import { Vr } from 'src/lib/styled/Divisors';
import { Column, Row } from 'src/lib/styled/Flex';
import { BigBoldText, BigText } from 'src/lib/styled/Typograph';
import trainerImg from 'src/public/images/trainerImg.png';

const Section2 = () => {
  return (
    <ElipseBg3>
      <Section>
        <Row responsive gap={10}>
          <Column left w="30%" gap={6}>
            <BigBoldText size={12}>GYMS</BigBoldText>
            <h2>Some Of Our Benefits</h2>
            <Row left>
              <BigBoldText size={14}>01</BigBoldText>
              <Vr />
              <BigText>Pre-consultation questionnaire</BigText>
            </Row>
            <Row left>
              <BigBoldText size={14}>02</BigBoldText>
              <Vr />
              <BigText>Anamnesis</BigText>
            </Row>
            <Row left>
              <BigBoldText size={14}>03</BigBoldText>
              <Vr />
              <BigText>Physical assessments</BigText>
            </Row>
            <Row left>
              <BigBoldText size={14}>04</BigBoldText>
              <Vr />
              <BigText>HITs (High Intensity Training)</BigText>
            </Row>
            <Row left>
              <BigBoldText size={14}>05</BigBoldText>
              <Vr />
              <BigText>Personalized Workouts</BigText>
            </Row>
            <Row left>
              <BigBoldText size={14}>06</BigBoldText>
              <Vr />
              <BigText>1% commissions on all your students&apos; purchases through the app</BigText>
            </Row>
          </Column>
          <Column w="30%">
            <Image width={450} src={trainerImg} alt="" />
          </Column>
        </Row>
      </Section>
    </ElipseBg3>
  );
};

export default Section2;
