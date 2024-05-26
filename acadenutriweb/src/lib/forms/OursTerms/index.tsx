import Image from 'next/image';
import { useState } from 'react';

import Checkbox from 'src/lib/base/Checkbox';
import { GradientBtn } from 'src/lib/styled/Buttons';
import { GreenBox } from 'src/lib/styled/Containers';
import { Column, Row } from 'src/lib/styled/Flex';
import { FormLarge } from 'src/lib/styled/Forms';
import playStoreImg from 'src/public/images/appstore.svg';
import googlePlayImg from 'src/public/images/playstore.svg';
import { termsForm } from 'src/utils/constants/forms';

const OurTermsForm = (props: Props.Form<Forms.TermOfService>) => {
  const { onSubmit } = props;
  const [form, setForm] = useState(termsForm);

  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    if (!form.authorizeTerms) return;
    if (!form.serviceTerms) return;
    onSubmit && onSubmit(form);
  };

  return (
    <FormLarge onSubmit={handleSubmit}>
      <h1>Terms</h1>
      <Column left gap={10}>
        <Checkbox
          label="I accept the Terms of Service"
          checked={form.serviceTerms}
          onChange={() => setForm({ ...form, serviceTerms: !form.serviceTerms })}
        />
        <Checkbox
          label="I authorize the sharing of this information to Gyms, Nutritionists, Pharmacies, Supplement Stores and Supermarkets that are partners with AcadeNutri"
          checked={form.authorizeTerms}
          onChange={() => setForm({ ...form, authorizeTerms: !form.authorizeTerms })}
        />
      </Column>
      <Column>
        <p>if you haven&apos;t download it yet, download our app</p>
        <GreenBox>
          <Row responsive gap={6}>
            <b>DOWNLOAD APP NOW</b>
            <Image width={160} src={googlePlayImg} alt="" />
            <Image width={160} src={playStoreImg} alt="" />
          </Row>
        </GreenBox>
      </Column>
      <GradientBtn w="100%">Next</GradientBtn>
    </FormLarge>
  );
};

export default OurTermsForm;
