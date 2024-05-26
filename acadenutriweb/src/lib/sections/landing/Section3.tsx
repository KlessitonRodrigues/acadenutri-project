import Image from 'next/image';

import { ElipseBg1 } from 'src/lib/styled/Background';
import { Section } from 'src/lib/styled/Containers';
import { Column, Row } from 'src/lib/styled/Flex';
import { ImageContainer } from 'src/lib/styled/Images';
import { BigBoldText, OutlineText } from 'src/lib/styled/Typograph';
import workoutImg from 'src/public/images/workout.png';

const Section3 = () => {
  return (
    <ElipseBg1>
      <Section>
        <Row responsive gap={10}>
          <Column responsive w="30%">
            <ImageContainer size={1.5} x="5rem">
              <Image src={workoutImg} alt="" />
            </ImageContainer>
          </Column>
          <Column responsive left w="50%">
            <OutlineText size={14}>JOIN AS</OutlineText>
            <BigBoldText size={26}>GYM TRAINER</BigBoldText>
            <p>
              Gyms Register, a cutting-edge gym management software, offers personalized workout
              plans tailored to each student&apos;s unique fitness goals and abilities. With its
              intuitive interface, gym owners and trainers can easily manage their students&apos;
              progress, track attendance, and generate detailed reports. By implementing this
              software, gyms can enhance the overall gym experience for their clients while
              increasing profitability through streamlined operations and efficient resource
              allocation
            </p>
          </Column>
        </Row>
      </Section>
    </ElipseBg1>
  );
};

export default Section3;
