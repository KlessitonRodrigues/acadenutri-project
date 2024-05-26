import { RiLoader5Line } from 'react-icons/ri';

import { Container, Description, FullScreen, Spinner, Title } from 'src/lib/styled/Loading';

import If from '../If';

const Loading = (props: Props.Loading) => {
  const { show, type, title, description } = props;
  return (
    <Container>
      <If check={show && type === 'icon'}>
        <Spinner>
          <RiLoader5Line size={32} />
        </Spinner>
      </If>

      <If check={show && type === 'fullScreen'}>
        <FullScreen>
          <Spinner>
            <RiLoader5Line size={32} />
          </Spinner>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </FullScreen>
      </If>
    </Container>
  );
};

export default Loading;
