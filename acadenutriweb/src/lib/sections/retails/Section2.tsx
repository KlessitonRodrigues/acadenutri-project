import Image from 'next/image';

import { ElipseBg3 } from 'src/lib/styled/Background';
import { Section } from 'src/lib/styled/Containers';
import { Column, Row } from 'src/lib/styled/Flex';
import { ImageContainer } from 'src/lib/styled/Images';
import { List, ListItem } from 'src/lib/styled/List';
import retail1 from 'src/public/images/retail1.png';
import retail2 from 'src/public/images/retail2.png';
import retail3 from 'src/public/images/retail3.png';
import retail4 from 'src/public/images/retail4.png';

const Section2 = () => {
  return (
    <Section>
      <Row responsive gap={10}>
        <ImageContainer x="3.5rem">
          <Image width={300} src={retail1} alt="" />
        </ImageContainer>
        <Column left>
          <h1>PLACE AN ORDER</h1>
          <List>
            <ListItem>
              The customer downloads the native mobile app from the Apple Store or Google Play Store
            </ListItem>
            <ListItem>
              The customer uses the application to browse the recipes prescribed by the
              nutritionist, place the order and pay online
            </ListItem>
            <ListItem>
              Any promotions and promotional offers are automatically calculated in the cart.
            </ListItem>
          </List>
        </Column>
      </Row>
      <Row m="-1.5rem 0 0" responsive gap={10}>
        <ImageContainer x="-3.5rem">
          <Image width={300} src={retail2} alt="" />
        </ImageContainer>
        <Column left>
          <h1>RECEIVING THE ORDER</h1>
          <List>
            <ListItem>
              The system automatically matches the online order with the corresponding store
              depending on the customer&apo;s location or shipping address and ships that order
              instantly.
            </ListItem>
          </List>
        </Column>
      </Row>
      <Row m="-1.5rem 0 0" responsive gap={10}>
        <ImageContainer x="3.5rem">
          <Image width={300} src={retail3} alt="" />
        </ImageContainer>

        <Column left>
          <h1>FULFILLING THE ORDER</h1>
          <List>
            <ListItem>
              Orders displayed in order monitors automatically calculate prep times
            </ListItem>
          </List>
        </Column>
      </Row>
      <Row m="-1.5rem 0 0" responsive gap={10}>
        <ImageContainer x="-3.5rem">
          <Image width={300} src={retail4} alt="" />
        </ImageContainer>

        <Column left>
          <h1>FINALIZING THE ORDER</h1>
          <List>
            <ListItem>
              Sales and other important data are automatically calculated in the system.
            </ListItem>
            <ListItem>
              The customer receives a thank you email with order confirmation and an optional link
              to complete a satisfaction survey
            </ListItem>
          </List>
          The customer downloads the native mobile app from the Apple Store or Google Play Store
        </Column>
      </Row>
    </Section>
  );
};

export default Section2;
