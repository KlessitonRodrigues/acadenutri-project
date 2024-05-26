import { useState } from 'react';

import { GradientBtn } from 'src/lib/styled/Buttons';
import { Column } from 'src/lib/styled/Flex';
import { FormLarge } from 'src/lib/styled/Forms';
import { Input, InputBox } from 'src/lib/styled/Inputs';
import { linksForm } from 'src/utils/constants/forms';

const UserLinksForm = (props: Props.Form<Forms.UserLinks>) => {
  const { onSubmit } = props;
  const [form, setForm] = useState(linksForm);

  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    onSubmit && onSubmit(form);
  };

  return (
    <FormLarge onSubmit={handleSubmit}>
      <Column gap={4}>
        <InputBox>
          <Input
            value={form.facebook}
            onChange={ev => setForm({ ...form, facebook: ev.target.value })}
            placeholder="Facebook/Meta"
          />
        </InputBox>
        <InputBox>
          <Input
            placeholder="Instagram/Meta"
            value={form.instagram}
            onChange={ev => setForm({ ...form, instagram: ev.target.value })}
          />
        </InputBox>
        <InputBox>
          <Input
            placeholder="Youtube"
            value={form.youtube}
            onChange={ev => setForm({ ...form, youtube: ev.target.value })}
          />
        </InputBox>
        <InputBox>
          <Input
            placeholder="Linkedin"
            value={form.linkedin}
            onChange={ev => setForm({ ...form, linkedin: ev.target.value })}
          />
        </InputBox>
        <InputBox>
          <Input
            placeholder="Institutional website"
            value={form.website}
            onChange={ev => setForm({ ...form, website: ev.target.value })}
          />
        </InputBox>
      </Column>
      <GradientBtn>Next</GradientBtn>
    </FormLarge>
  );
};

export default UserLinksForm;
