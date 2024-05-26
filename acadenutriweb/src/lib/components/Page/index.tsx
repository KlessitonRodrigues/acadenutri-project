import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import Loading from 'src/lib/base/Loading';
import { PageContainer, PageContent } from 'src/lib/styled/Containers';

const Page = (props: Props.Page) => {
  const { loading, children } = props;

  return (
    <PageContainer>
      <ReactNotifications className="notify-box" />
      <Loading show={!!loading} type="fullScreen" />
      <PageContent>{children}</PageContent>
    </PageContainer>
  );
};

export default Page;
