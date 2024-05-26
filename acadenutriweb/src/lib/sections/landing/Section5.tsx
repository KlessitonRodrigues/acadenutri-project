import Image from 'next/image';

import { ElipseBg1 } from 'src/lib/styled/Background';
import { GradientBtn } from 'src/lib/styled/Buttons';
import { Section } from 'src/lib/styled/Containers';
import { Column, Row } from 'src/lib/styled/Flex';
import supplementImg from 'src/public/images/supplement.png';

const Section5 = () => {
  return (
    <ElipseBg1>
      <Section>
        <Row responsive gap={10}>
          <Column left gap={10}>
            <h1>Supermarkets, Pharmacies, supplement stores and Restaurants</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ornare suspendisse sed nisi lacus sed.
              Gravida rutrum quisque non tellus orci ac. In tellus integer feugiat scelerisque
              varius morbi enim nunc faucibus. Purus semper eget duis at. Habitant morbi tristique
              senectus et netus et malesuada. Risus viverra adipiscing at in tellus integer feugiat.
              Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat.{' '}
            </p>
            <GradientBtn>Register Now</GradientBtn>
          </Column>
          <Column>
            <Image src={supplementImg} alt="" />
          </Column>
        </Row>
      </Section>
    </ElipseBg1>
  );
};

export default Section5;
