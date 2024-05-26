import { useState } from 'react';

import { GradientBtn } from 'src/lib/styled/Buttons';
import { Column, Row } from 'src/lib/styled/Flex';
import { FormLarge } from 'src/lib/styled/Forms';
import { Input, InputBox } from 'src/lib/styled/Inputs';
import { paymentForm } from 'src/utils/constants/forms';
import { onlyNumbers } from 'src/utils/forms';

export const PaymentForm = (props: Props.Form<Forms.Payment>) => {
  const { onSubmit } = props;
  const [form, setForm] = useState(paymentForm);

  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    onSubmit && onSubmit(form);
  };

  return (
    <FormLarge onSubmit={handleSubmit}>
      <Column left gap={6}>
        <h5>Payment Details</h5>
        <InputBox>
          <Input
            required
            placeholder="Card number"
            value={form.cardNumber}
            onChange={ev => setForm({ ...form, cardNumber: onlyNumbers(ev.target.value) })}
          />
        </InputBox>
        <InputBox>
          <Input
            required
            placeholder="Validity"
            value={form.vality}
            onChange={ev => setForm({ ...form, vality: ev.target.value })}
          />
        </InputBox>
        <InputBox>
          <Input
            required
            placeholder="CVV"
            value={form.CVV}
            onChange={ev => setForm({ ...form, CVV: ev.target.value })}
          />
        </InputBox>
        <InputBox>
          <Input
            required
            placeholder="Name printed on card"
            value={form.name}
            onChange={ev => setForm({ ...form, name: ev.target.value })}
          />
        </InputBox>
        <h5>Information for using eletronic Invoice</h5>
        <InputBox>
          <Input
            required
            placeholder="Name for issuing invoice"
            value={form.invoiceName}
            onChange={ev => setForm({ ...form, invoiceName: ev.target.value })}
          />
        </InputBox>
        <InputBox>
          <Input
            required
            placeholder="Cellphone number"
            value={form.phone}
            onChange={ev => setForm({ ...form, phone: ev.target.value })}
          />
        </InputBox>
        <Row responsive>
          <InputBox>
            <Input
              required
              placeholder="Número do CPF"
              value={form.invoiceCpf}
              onChange={ev => setForm({ ...form, invoiceCpf: onlyNumbers(ev.target.value) })}
            />
          </InputBox>
          <Row w="35%">
            <h6>You have registerd as Gym</h6>
          </Row>
        </Row>
        <InputBox>
          <Input
            required
            placeholder="CNPJ number, if you have"
            value={form.invoiceCnpj}
            onChange={ev => setForm({ ...form, invoiceCnpj: onlyNumbers(ev.target.value) })}
          />
        </InputBox>
        <GradientBtn w="100%">Pay and Finalize</GradientBtn>
      </Column>
    </FormLarge>
  );
};
