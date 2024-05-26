import Image from 'next/image';

import { ElipseBg3 } from 'src/lib/styled/Background';
import { Section } from 'src/lib/styled/Containers';
import { Column } from 'src/lib/styled/Flex';
import { ImageContainer } from 'src/lib/styled/Images';
import cycleImg from 'src/public/images/cycle.png';

const Section2 = () => {
  return (
    <ElipseBg3>
      <Section>
        <Column gap={10}>
          <h1>Yours Virtuous Cycle</h1>
          <ImageContainer w="100%" h="100%">
            <Image src={cycleImg} alt="" />
          </ImageContainer>
        </Column>
      </Section>
    </ElipseBg3>
  );
};

export default Section2;
