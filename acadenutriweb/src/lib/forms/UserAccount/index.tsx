import { useState } from 'react';

import DropdownSelector from 'src/lib/base/Dropdown';
import HiddenInput from 'src/lib/base/HiddenInput';
import { GradientBtn } from 'src/lib/styled/Buttons';
import { Row } from 'src/lib/styled/Flex';
import { FormLarge } from 'src/lib/styled/Forms';
import { Input, InputBox } from 'src/lib/styled/Inputs';
import { functionOptions } from 'src/utils/constants/dropdown';
import { accountForm } from 'src/utils/constants/forms';
import { isValidPassword, onlyNumbers } from 'src/utils/forms';
import { notify } from 'src/utils/notify';

const UserAccountForm = (props: Props.Form<Forms.SignUp>) => {
  const { onSubmit } = props;
  const [form, setForm] = useState(accountForm);

  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    if (!form.function) return notify.warning('Please chose a function');
    if (!isValidPassword(form.password, form.confirmPassword)) return;
    onSubmit && onSubmit(form);
  };

  return (
    <FormLarge onSubmit={handleSubmit}>
      <h4>Please enter your details</h4>
      <Row responsive>
        <DropdownSelector
          label="Choose function"
          value={form.function}
          options={functionOptions}
          onChange={value => setForm({ ...form, function: value })}
        />
        <InputBox>
          <Input
            required
            value={form?.name}
            onChange={ev => setForm({ ...form, name: ev.target.value })}
            placeholder="Enter you name"
          />
        </InputBox>
      </Row>
      <Row responsive>
        <InputBox>
          <Input
            required
            value={form?.company}
            onChange={ev => setForm({ ...form, company: ev.target.value })}
            placeholder="Enter your corporate name"
          />
        </InputBox>
        <InputBox>
          <Input
            required
            value={form?.cep}
            onChange={ev => setForm({ ...form, cep: ev.target.value })}
            placeholder="Enter your CEP"
          />
        </InputBox>
      </Row>
      <Row responsive>
        <InputBox>
          <Input
            required
            value={form?.address}
            onChange={ev => setForm({ ...form, address: ev.target.value })}
            placeholder="Enter your address"
          />
        </InputBox>
      </Row>
      <Row responsive>
        <InputBox>
          <Input
            value={form?.complementary}
            onChange={ev => setForm({ ...form, complementary: ev.target.value })}
            placeholder="Enter your complement"
          />
        </InputBox>
        <InputBox>
          <Input
            required
            value={form?.neighborhood}
            onChange={ev => setForm({ ...form, neighborhood: ev.target.value })}
            placeholder="Enter your neighborhood"
          />
        </InputBox>
      </Row>
      <Row responsive>
        <InputBox>
          <Input
            required
            placeholder="Enter your city"
            value={form?.city}
            onChange={ev => setForm({ ...form, city: ev.target.value })}
          />
        </InputBox>
        <InputBox>
          <Input
            required
            placeholder="State"
            value={form?.state}
            onChange={ev => setForm({ ...form, state: ev.target.value })}
          />
        </InputBox>
      </Row>
      <Row responsive>
        <InputBox>
          <Input
            required
            placeholder="Phone Number"
            value={form?.phone}
            onChange={ev => setForm({ ...form, phone: onlyNumbers(ev.target.value) })}
          />
        </InputBox>
        <InputBox>
          <Input
            required
            placeholder="Email"
            value={form?.email}
            onChange={ev => setForm({ ...form, email: ev.target.value })}
          />
        </InputBox>
      </Row>
      <Row responsive>
        <InputBox>
          <Input
            required
            placeholder="Enter CPF"
            value={form?.cpf}
            onChange={ev => setForm({ ...form, cpf: onlyNumbers(ev.target.value) })}
          />
        </InputBox>
        <InputBox>
          <Input
            placeholder="Enter CNPJ or category number"
            value={form?.cnpj}
            onChange={ev => setForm({ ...form, cnpj: onlyNumbers(ev.target.value) })}
          />
        </InputBox>
      </Row>
      <Row responsive>
        <HiddenInput
          required
          placeholder="Password"
          value={form?.password}
          onChange={value => setForm({ ...form, password: value })}
        />
        <HiddenInput
          required
          placeholder="Confirm Password"
          value={form?.confirmPassword}
          onChange={value => setForm({ ...form, confirmPassword: value })}
        />
      </Row>
      <GradientBtn w="100%">Next</GradientBtn>
    </FormLarge>
  );
};

export default UserAccountForm;
