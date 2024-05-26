import { useState } from 'react';

import { GradientBtn } from 'src/lib/styled/Buttons';
import { FormLarge } from 'src/lib/styled/Forms';
import { TextArea } from 'src/lib/styled/Inputs';
import { serviceForm } from 'src/utils/constants/forms';

const UserServiceForm = (props: Props.Form<Forms.Service>) => {
  const { onSubmit } = props;
  const [form, setForm] = useState(serviceForm);

  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    onSubmit && onSubmit(form);
  };

  return (
    <FormLarge onSubmit={handleSubmit}>
      <h4>Description of your service</h4>
      <TextArea
        value={form.description}
        onChange={ev => setForm({ ...form, description: ev.target.value })}
        placeholder="Describe your services in up to 500 words."
      />
      <GradientBtn w="100%">Next</GradientBtn>
    </FormLarge>
  );
};

export default UserServiceForm;
