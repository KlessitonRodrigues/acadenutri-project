import Image from 'next/image';
import { useState } from 'react';
import { IoCaretDownOutline } from 'react-icons/io5';

import { Dropdown, DropdownItem, DropdownItems } from 'src/lib/styled/DropDown';
import flagImg1 from 'src/public/images/flag1.svg';
import flagImg2 from 'src/public/images/flag2.svg';
import flagImg3 from 'src/public/images/flag3.svg';

const SwitchLang = () => {
  const [langMenu, setLangMenu] = useState(false);

  return (
    <Dropdown active={langMenu} onClick={() => setLangMenu(!langMenu)}>
      <Image width={24} src={flagImg1} alt="" />
      <div>PT</div>
      <IoCaretDownOutline />
      <DropdownItems w="fit-content" x="-100%">
        <DropdownItem>
          <Image width={24} src={flagImg1} alt="" />
          <div>Português (Brasil)</div>
        </DropdownItem>
        <DropdownItem>
          <Image width={24} src={flagImg2} alt="" />
          <div>English</div>
        </DropdownItem>
        <DropdownItem>
          <Image width={24} src={flagImg3} alt="" />
          <div>Español</div>
        </DropdownItem>
      </DropdownItems>
    </Dropdown>
  );
};

export default SwitchLang;
