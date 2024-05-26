import Image from 'next/image';

import lineLeftIcon from 'src/public/icons/lineleft.svg';
import lineRightIcon from 'src/public/icons/lineright.svg';

import { Container } from '../../styled/Containers';
import { Row } from '../../styled/Flex';

const PageTitle = (props: Props.PageTitle) => {
  const { title } = props;
  return (
    <Container>
      <Row left>
        <Image src={lineLeftIcon} alt="" />
        <h3>{title}</h3>
        <Image src={lineRightIcon} alt="" />
      </Row>
    </Container>
  );
};

export default PageTitle;
