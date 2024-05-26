import Image from 'next/image';

import { ThemeBg3 } from 'src/lib/styled/Background';
import { Section, WhiteBox } from 'src/lib/styled/Containers';
import { Row } from 'src/lib/styled/Flex';
import companyImg1 from 'src/public/images/company1.svg';
import companyImg2 from 'src/public/images/company2.svg';

const Section6 = () => {
  return (
    <ThemeBg3>
      <Section p="3rem">
        <Row responsive gap={10}>
          <WhiteBox w="200px" h="120px">
            <Image width={80} src={companyImg2} alt="" />
          </WhiteBox>
          <WhiteBox w="200px" h="120px">
            <Image width={80} src={companyImg1} alt="" />
          </WhiteBox>
        </Row>
      </Section>
    </ThemeBg3>
  );
};

export default Section6;
