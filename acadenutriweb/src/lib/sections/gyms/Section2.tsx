import Image from 'next/image';

import { ElipseBg3 } from 'src/lib/styled/Background';
import { Section } from 'src/lib/styled/Containers';
import { Vr } from 'src/lib/styled/Divisors';
import { Column, Row } from 'src/lib/styled/Flex';
import { BigBoldText, BigText } from 'src/lib/styled/Typograph';
import gymImg from 'src/public/images/gymImg.png';

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
              <BigText>Student Management</BigText>
            </Row>
            <Row left>
              <BigBoldText size={14}>02</BigBoldText>
              <Vr />
              <BigText>Teacher Management</BigText>
            </Row>
            <Row left>
              <BigBoldText size={14}>03</BigBoldText>
              <Vr />
              <BigText>Trains in video</BigText>
            </Row>
            <Row left>
              <BigBoldText size={14}>04</BigBoldText>
              <Vr />
              <BigText>HITS (High Intensity Training)</BigText>
            </Row>
            <Row left>
              <BigBoldText size={14}>05</BigBoldText>
              <Vr />
              <BigText>Personalized Trains</BigText>
            </Row>
            <Row left>
              <BigBoldText size={14}>06</BigBoldText>
              <Vr />
              <BigText>Free access to the personal trainer system for all your teachers</BigText>
            </Row>
            <Row left>
              <BigBoldText size={14}>07</BigBoldText>
              <Vr />
              <BigText>1% commissions on all your students&apos; purchases through the app</BigText>
            </Row>
          </Column>
          <Column w="30%">
            <Image width={450} src={gymImg} alt="" />
          </Column>
        </Row>
      </Section>
    </ElipseBg3>
  );
};

export default Section2;
