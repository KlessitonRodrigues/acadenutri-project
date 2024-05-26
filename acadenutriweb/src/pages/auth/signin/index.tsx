import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import PageTitle from 'src/lib/base/PageTitle';
import Footer from 'src/lib/components/Footer';
import Header from 'src/lib/components/Header';
import Page from 'src/lib/components/Page';
import { SignInForm } from 'src/lib/forms/SignIn';
import LoadingModal from 'src/lib/modals/Loading';
import { BackgroundImage } from 'src/lib/styled/Background';
import { Section } from 'src/lib/styled/Containers';
import ellipseBg3 from 'src/public/images/ellipseBg2.svg';
import { apiClient, apiRoutes } from 'src/utils/axios/api';
import { notify } from 'src/utils/notify';
import { decodeToken, setToken } from 'src/utils/token';

const SignInPage = () => {
  const { push } = useRouter();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (decodeToken()) push('/app/home');
  }, []);

  const onLogin = (form: Forms.SignIn) => {
    setLoading(true);
    apiClient
      .post(apiRoutes.authSignIn, form)
      .then(res => {
        setToken(res.data);
        notify.success('Login successful');
        push('/app/home');
      })
      .finally(() => setLoading(false));
  };

  return (
    <Page>
      <BackgroundImage src={ellipseBg3.src} p="0 0 4rem">
        <Header />
        <PageTitle title="Login" />
      </BackgroundImage>
      <Section>
        <SignInForm onSubmit={onLogin} />
      </Section>
      <Footer />
      <LoadingModal show={isLoading} />
    </Page>
  );
};

export default SignInPage;
