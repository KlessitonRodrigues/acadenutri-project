import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';

import If from 'src/lib/base/If';
import Text from 'src/lib/base/Text';
import { OutlineBtn } from 'src/lib/styled/Buttons';
import { Row } from 'src/lib/styled/Flex';
import { Navbar, NavbarButton, NavbarLink, NavbarToggle } from 'src/lib/styled/Navbar';
import { Avatar } from 'src/lib/styled/User';
import logoImg from 'src/public/images/logo1.svg';
import profileImg from 'src/public/images/profile.jpg';
import { logout } from 'src/utils/token';

import SwitchLang from '../SwitchLang';

const AppHeader = () => {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <Navbar>
      <Row w="fit-content">
        <Link href="/">
          <Image width={250} src={logoImg} alt="" />
        </Link>
      </Row>
      <NavbarToggle active={open}>
        <Row responsive gap={8} right>
          <NavbarLink active={path === '/app/home'}>
            <Link href="/app/home">
              <Text path="app_header_link_1" />
            </Link>
          </NavbarLink>
          <NavbarLink active={path === '/app/actives'}>
            <Text path="app_header_link_2" />
          </NavbarLink>
          <NavbarLink active={path === '/app/inactives'}>
            <Text path="app_header_link_3" />
          </NavbarLink>
          <NavbarLink active={path === '/app/all'}>
            <Text path="app_header_link_4" />
          </NavbarLink>
        </Row>
        <Row w="fit-content" gap={6}>
          <Avatar src={profileImg.src} />
          <OutlineBtn onClick={logout}>Logout</OutlineBtn>
          <SwitchLang />
        </Row>
      </NavbarToggle>
      <NavbarButton onClick={() => setOpen(!open)}>
        <If check={open} true={<IoClose size="40px" />} false={<IoMenu size="40px" />} />
      </NavbarButton>
    </Navbar>
  );
};

export default AppHeader;
