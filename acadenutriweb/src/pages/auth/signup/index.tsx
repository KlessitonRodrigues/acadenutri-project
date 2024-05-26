import { useRouter } from 'next/router';
import { useState } from 'react';

import If from 'src/lib/base/If';
import PageTitle from 'src/lib/base/PageTitle';
import StepLine from 'src/lib/base/StepLine';
import Footer from 'src/lib/components/Footer';
import Header from 'src/lib/components/Header';
import Page from 'src/lib/components/Page';
import OurTermsForm from 'src/lib/forms/OursTerms';
import UserAccountForm from 'src/lib/forms/UserAccount';
import UserLinksForm from 'src/lib/forms/UserLinks';
import UserScheduelForm from 'src/lib/forms/UserSchedule';
import UserServiceForm from 'src/lib/forms/UserService';
import VerifyCodeForm from 'src/lib/forms/VerifyCode';
import { Section } from 'src/lib/styled/Containers';
import { apiClient, apiRoutes } from 'src/utils/axios/api';
import { accountForm, linksForm, serviceForm, verifyCodeForm } from 'src/utils/constants/forms';
import { notify } from 'src/utils/notify';
import { setToken } from 'src/utils/token';

const SignUpPage = () => {
  const { push } = useRouter();
  const [forms, setForms] = useState({ accountForm, serviceForm, linksForm, verifyCodeForm });
  const [step, setStep] = useState(0);

  const onNextForm = async (updatedForms: typeof forms) => {
    setForms(updatedForms);
    setStep(step + 1);
  };

  const onCreateUser = async () => {
    const userData = {
      user: forms.accountForm,
      service: forms.serviceForm,
      links: forms.linksForm,
    };

    apiClient.post(apiRoutes.authSignUp, userData).then(res => {
      notify.success('New account created successfully');
      notify.info(`Code: ${res.data.code} (TESTING ONLY)`);
      setStep(step + 1);
    });
  };

  const onVerifyCode = async (form: Forms.VerifyCode) => {
    const data = {
      email: forms.accountForm.email,
      code: form.code,
    };
    apiClient.post(apiRoutes.authVerifyCode, data).then(res => {
      setToken(res.data.token);
      notify.success('Login success');
      push('/app/plans');
    });
  };

  return (
    <Page>
      <Header />
      <PageTitle title="Register New Account" />
      <Section p="0 0 10rem">
        <StepLine step={step} steps={6} />
        <If
          check={step === 0}
          true={<UserAccountForm onSubmit={form => onNextForm({ ...forms, accountForm: form })} />}
        />
        <If
          check={step === 1}
          true={<UserScheduelForm onSubmit={form => onNextForm({ ...forms, serviceForm: form })} />}
        />
        <If
          check={step === 2}
          true={<UserServiceForm onSubmit={form => onNextForm({ ...forms, serviceForm: form })} />}
        />
        <If
          check={step === 3}
          true={<UserLinksForm onSubmit={form => onNextForm({ ...forms, linksForm: form })} />}
        />
        <If check={step === 4} true={<OurTermsForm onSubmit={onCreateUser} />} />
        <If check={step === 5} true={<VerifyCodeForm onSubmit={onVerifyCode} />} />
      </Section>
      <Footer />
    </Page>
  );
};

export default SignUpPage;
