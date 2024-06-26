import { useState } from 'react';
import { PiEye, PiEyeSlash } from 'react-icons/pi';

import { Input, InputBox } from 'src/lib/styled/Inputs';

import If from '../If';

const HiddenInput = (props: Props.HiddenInput) => {
  const { placeholder, value, required, onChange } = props;
  const [active, setActive] = useState(false);

  return (
    <InputBox>
      <Input
        type={active ? 'text' : 'password'}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={ev => onChange && onChange(ev.target.value)}
      />
      <div onClick={() => setActive(!active)}>
        <If check={active} true={<PiEye size={16} />} false={<PiEyeSlash size={16} />} />
      </div>
    </InputBox>
  );
};

export default HiddenInput;
