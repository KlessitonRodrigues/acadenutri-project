import { useMemo, useState } from 'react';
import { PiCaretDown } from 'react-icons/pi';

import { DropdownItem, DropdownItems, DropdownWhite } from 'src/lib/styled/DropDown';

const DropdownSelector = (props: Props.DropdownSelector) => {
  const { label, value, options, onChange } = props;
  const [active, setActive] = useState(false);

  const DropdownOptions = useMemo(() => {
    return options.map(option => (
      <DropdownItem key={option} onClick={() => onChange(option)}>
        {option}
      </DropdownItem>
    ));
  }, [options, onChange]);

  return (
    <DropdownWhite active={active} onClick={() => setActive(!active)}>
      {value || label}
      <PiCaretDown size={20} />
      <DropdownItems>{DropdownOptions}</DropdownItems>
    </DropdownWhite>
  );
};

export default DropdownSelector;
