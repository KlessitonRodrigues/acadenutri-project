import Image from 'next/image';

import { GradientBtn } from 'src/lib/styled/Buttons';
import { Form } from 'src/lib/styled/Forms';
import { Input, InputBox } from 'src/lib/styled/Inputs';
import emailIcon from 'src/public/icons/email.svg';

export const ResetPasswordForm = () => {
  return (
    <Form>
      <h1>Reset Your Passeword</h1>
      <p>Please enter your email</p>
      <InputBox>
        <Input type="text" placeholder="Email" />
        <Image width={20} src={emailIcon} alt="" />
      </InputBox>

      <GradientBtn>Send Code</GradientBtn>
    </Form>
  );
};
