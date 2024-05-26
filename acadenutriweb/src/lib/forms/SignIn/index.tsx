import Link from 'next/link';
import { useState } from 'react';
import { IoMailOutline } from 'react-icons/io5';
import 'react-notifications-component/dist/theme.css';

import Checkbox from 'src/lib/base/Checkbox';
import HiddenInput from 'src/lib/base/HiddenInput';
import { GradientBtn } from 'src/lib/styled/Buttons';
import { Row } from 'src/lib/styled/Flex';
import { Form } from 'src/lib/styled/Forms';
import { Input, InputBox } from 'src/lib/styled/Inputs';
import { isValidPassword } from 'src/utils/forms';

const initialState: Forms.SignIn = {
  email: '',
  password: '',
  rememberMe: false,
};

export const SignInForm = (props: Props.Form<Forms.SignIn>) => {
  const { onSubmit } = props;
  const [form, setForm] = useState(initialState);

  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    if (!isValidPassword(form.password)) return;
    onSubmit && onSubmit(form);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Login to Your Account</h1>
      <p>Please enter your details</p>
      <InputBox>
        <Input
          type="email"
          placeholder="Email"
          autoComplete="email"
          required
          value={form?.email}
          onChange={ev => setForm({ ...form, email: ev.target.value })}
        />
        <IoMailOutline size={16} />
      </InputBox>
      <HiddenInput
        required
        placeholder="Password"
        value={form?.password}
        onChange={value => setForm({ ...form, password: value })}
      />
      <Row>
        <Row left>
          <Checkbox
            checked={form.rememberMe}
            label="Remenber me"
            onChange={rememberMe => setForm({ ...form, rememberMe })}
          />
        </Row>
        <Row right>
          <Link href="/auth/reset">
            <b>Forgot password?</b>
          </Link>
        </Row>
      </Row>
      <GradientBtn w="100%">Login</GradientBtn>
    </Form>
  );
};
