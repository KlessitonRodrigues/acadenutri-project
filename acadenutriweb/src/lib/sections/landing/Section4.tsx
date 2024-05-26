import Image from 'next/image';

import { ThemeBg3 } from 'src/lib/styled/Background';
import { Section, WhiteBox } from 'src/lib/styled/Containers';
import { Row } from 'src/lib/styled/Flex';
import traineIcon1 from 'src/public/icons/traineIcon1.svg';
import traineIcon2 from 'src/public/icons/traineIcon2.svg';
import traineIcon3 from 'src/public/icons/traineIcon3.svg';

const Section4 = () => {
  return (
    <ThemeBg3>
      <Section p="3rem">
        <Row flewrap gap={10}>
          <Row responsive w="25%" gap={4}>
            <WhiteBox w="70px" h="70px">
              <Image width={35} src={traineIcon1} alt="" />
            </WhiteBox>
            <b>Register Personalized Workouts</b>
          </Row>
          <Row responsive w="25%" gap={4}>
            <WhiteBox w="70px" h="70px">
              <Image width={35} src={traineIcon2} alt="" />
            </WhiteBox>
            <b>Register Personalized Workouts</b>
          </Row>
          <Row responsive w="25%" gap={4}>
            <WhiteBox w="70px" h="70px">
              <Image width={35} src={traineIcon3} alt="" />
            </WhiteBox>
            <b>Register Personalized Workouts</b>
          </Row>
        </Row>
      </Section>
    </ThemeBg3>
  );
};

export default Section4;
