import { GradientBtn } from 'src/lib/styled/Buttons';
import { FormLarge } from 'src/lib/styled/Forms';
import { Input, InputBox, Label, TextArea } from 'src/lib/styled/Inputs';

const ContactForm = () => {
  return (
    <FormLarge>
      <Label>
        <span>Name</span>
        <InputBox>
          <Input placeholder="Name" />
        </InputBox>
      </Label>
      <Label>
        <span>Phone Number</span>
        <InputBox>
          <Input placeholder="Phone" />
        </InputBox>
      </Label>
      <Label>
        <span>Email Address</span>
        <InputBox>
          <Input placeholder="Email" />
        </InputBox>
      </Label>
      <Label>
        <span>Name</span>
        <InputBox>
          <Input placeholder="Name" />
        </InputBox>
      </Label>
      <Label>
        <span>Name</span>
        <TextArea />
      </Label>
      <GradientBtn w="100%">Send</GradientBtn>
    </FormLarge>
  );
};

export default ContactForm;
