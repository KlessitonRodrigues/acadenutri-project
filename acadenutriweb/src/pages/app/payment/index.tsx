import { useRouter } from 'next/router';
import { useState } from 'react';

import useAccount from 'src/hooks/useAccount';
import PageTitle from 'src/lib/base/PageTitle';
import AppHeader from 'src/lib/components/AppHeader';
import Footer from 'src/lib/components/Footer';
import Page from 'src/lib/components/Page';
import { PaymentForm } from 'src/lib/forms/Payment';
import { BackgroundImage } from 'src/lib/styled/Background';
import { Section } from 'src/lib/styled/Containers';
import ellipseBg3 from 'src/public/images/ellipseBg2.svg';
import { apiClient, apiRoutes } from 'src/utils/axios/api';
import { notify } from 'src/utils/notify';

const PaymentPage = () => {
  const { user } = useAccount();
  const { push } = useRouter();
  const [isLoading, setLoading] = useState(false);

  const onSubmitPayment = (form: Forms.Payment) => {
    setLoading(true);
    apiClient
      .post(apiRoutes.payment, { payment: form })
      .then(res => {
        notify.success('Payment processed successfully');
        push('/app/home');
      })
      .finally(() => setLoading(false));
  };

  return (
    <Page loading={isLoading}>
      <BackgroundImage src={ellipseBg3.src}>
        <AppHeader />
        <PageTitle title={'Registered Successfully as a ' + user?.function} />
      </BackgroundImage>
      <Section p="0 0 6rem">
        <PaymentForm onSubmit={onSubmitPayment} />
      </Section>
      <Footer />
    </Page>
  );
};

export default PaymentPage;
