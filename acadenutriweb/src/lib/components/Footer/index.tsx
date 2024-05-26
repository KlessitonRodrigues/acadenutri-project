import Image from 'next/image';

import { DarkGreenBg } from 'src/lib/styled/Background';
import { WhiteBtn } from 'src/lib/styled/Buttons';
import { Section } from 'src/lib/styled/Containers';
import { Column, Row } from 'src/lib/styled/Flex';
import { Input, InputBox } from 'src/lib/styled/Inputs';
import emailIcon from 'src/public/icons/email.svg';
import socialIcon1 from 'src/public/icons/social1.svg';
import socialIcon2 from 'src/public/icons/social2.svg';
import socialIcon3 from 'src/public/icons/social3.svg';
import logoWhite from 'src/public/images/logoWhite.svg';

const Footer = () => {
  return (
    <DarkGreenBg>
      <Section>
        <Row responsive top gap={10}>
          <Column responsive left gap={8} w="350px">
            <Image width={250} src={logoWhite} alt="" />
            <p>
              onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            </p>
            <Row left>
              <Image width={40} src={socialIcon1} alt="" />
              <Image width={40} src={socialIcon2} alt="" />
              <Image width={40} src={socialIcon3} alt="" />
            </Row>
          </Column>
          <Row w="300px" gap={10}>
            <Column left responsive w="200px">
              <h3>Quick Links</h3>
              <p>My Account</p>
              <p>Contact form</p>
              <p>About US</p>
              <p>Gyms</p>
              <p>Nutritionists</p>
            </Column>
            <Column left responsive w="200px">
              <h3>Quick Links</h3>
              <p>My Account</p>
              <p>Contact form</p>
              <p>About US</p>
              <p>Gyms</p>
              <p>Nutritionists</p>
            </Column>
          </Row>
          <Column left responsive gap={8} w="400px">
            <Column left gap={4}>
              <h3>Subscribe Our Newsletter</h3>
              <Row>
                <InputBox>
                  <Image width={20} src={emailIcon} alt="" />
                  <Input placeholder="Email" />
                </InputBox>
                <WhiteBtn>Subscribe</WhiteBtn>
              </Row>
            </Column>
            <Column left>
              <h3>Contact</h3>
              <p>+1 98745 987412</p>
              <p>johandoe@email.com</p>
            </Column>
          </Column>
        </Row>
      </Section>
    </DarkGreenBg>
  );
};

export default Footer;
