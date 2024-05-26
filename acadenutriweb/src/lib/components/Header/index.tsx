import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';

import useAccount from 'src/hooks/useAccount';
import If from 'src/lib/base/If';
import Text from 'src/lib/base/Text';
import { GradientBtn, OutlineBtn } from 'src/lib/styled/Buttons';
import { Row } from 'src/lib/styled/Flex';
import { Navbar, NavbarButton, NavbarLink, NavbarToggle } from 'src/lib/styled/Navbar';
import { Avatar } from 'src/lib/styled/User';
import logoImg from 'src/public/images/logo1.svg';

import SwitchLang from '../SwitchLang';

const Header = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAccount();
  const path = usePathname();

  return (
    <Navbar>
      <Row w="fit-content">
        <Link href="/">
          <Image width={250} src={logoImg} alt="" />
        </Link>
      </Row>
      <NavbarToggle active={open}>
        <Row responsive gap={8}>
          <NavbarLink active={path === '/'}>
            <Link href="/">
              <Text path="header_link_1" />
            </Link>
          </NavbarLink>
          <NavbarLink active={path === '/whoweare'}>
            <Link href="/whoweare">
              <Text path="header_link_2" />
            </Link>
          </NavbarLink>
          <NavbarLink active={path === '/gyms'}>
            <Link href="/gyms">
              <Text path="header_link_3" />
            </Link>
          </NavbarLink>
          <NavbarLink active={path === '/trainer'}>
            <Link href="/trainer">
              <Text path="header_link_4" />
            </Link>
          </NavbarLink>
          <NavbarLink active={path === '/nutritionist'}>
            <Link href="/nutritionist">
              <Text path="header_link_5" />
            </Link>
          </NavbarLink>
          <NavbarLink active={path === '/retail'}>
            <Link href="/retail">
              <Text path="header_link_6" />
            </Link>
          </NavbarLink>
        </Row>
        <Row w="fit-content">
          <If check={!user}>
            <>
              <Link href="/auth/signin">
                <OutlineBtn>
                  <Text path="header_login" />
                </OutlineBtn>
              </Link>
              <Link href="/auth/signup">
                <GradientBtn>
                  <Text path="header_register" />
                </GradientBtn>
              </Link>
            </>
          </If>
          <If check={!!user}>
            <Link href="/app/home">
              <Row gap={4}>
                <Avatar />
                <OutlineBtn>Account</OutlineBtn>
              </Row>
            </Link>
          </If>
          <SwitchLang />
        </Row>
      </NavbarToggle>
      <NavbarButton onClick={() => setOpen(!open)}>
        <If check={open} true={<IoClose size="40px" />} false={<IoMenu size="40px" />} />
      </NavbarButton>
    </Navbar>
  );
};

export default Header;
