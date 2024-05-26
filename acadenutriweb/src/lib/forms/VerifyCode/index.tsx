import Image from 'next/image';
import { useState } from 'react';

import { GradientBtn } from 'src/lib/styled/Buttons';
import { Row } from 'src/lib/styled/Flex';
import { FormLarge } from 'src/lib/styled/Forms';
import { DigitInput } from 'src/lib/styled/Inputs';
import secretCodeImg from 'src/public/images/secretcode.png';
import { verifyCodeForm } from 'src/utils/constants/forms';

const VerifyCodeForm = (props: Props.Form<Forms.VerifyCode>) => {
  const { onSubmit } = props;
  const [form, setForm] = useState(verifyCodeForm);

  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    onSubmit && onSubmit(form);
  };

  const onInputCode = (index: number, value: string) => {
    const { code } = form;
    if (value === '') return setForm({ ...form, code: code.replace(code[index], '') });
    return setForm({ ...form, code: code + value });
  };

  return (
    <FormLarge onSubmit={handleSubmit}>
      <Image width={400} src={secretCodeImg} alt="" />
      <div>
        <h1>Verification Code</h1>
        <p>Enter the code sent to test@test.com</p>
      </div>
      <Row gap={6}>
        <DigitInput
          maxLength={1}
          value={form.code[0] || ''}
          onChange={ev => onInputCode(0, ev.target.value)}
        />
        <DigitInput
          maxLength={1}
          value={form.code[1] || ''}
          onChange={ev => onInputCode(1, ev.target.value)}
        />
        <DigitInput
          maxLength={1}
          value={form.code[2] || ''}
          onChange={ev => onInputCode(2, ev.target.value)}
        />
        <DigitInput
          maxLength={1}
          value={form.code[3] || ''}
          onChange={ev => onInputCode(3, ev.target.value)}
        />
      </Row>
      <GradientBtn w="100%">Next</GradientBtn>
    </FormLarge>
  );
};

export default VerifyCodeForm;
