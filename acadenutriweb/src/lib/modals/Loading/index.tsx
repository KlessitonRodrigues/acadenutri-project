import Image from 'next/image';

import { Column, Row } from 'src/lib/styled/Flex';
import { Modal, ModalContent } from 'src/lib/styled/Modals';
import { ProgressLine } from 'src/lib/styled/Progress';
import loadingImg from 'src/public/images/loading.png';

const LoadingModal = (props: Props.Modal) => {
  const { show } = props;
  return (
    <Modal show={show}>
      <ModalContent>
        <Column gap={10} h="100%">
          <Image width={350} src={loadingImg} alt="" />
          <h2>Entering the System</h2>
          <Row responsive w="70%" gap={4}>
            <ProgressLine w="50%" />
            <h6>50%</h6>
          </Row>
        </Column>
      </ModalContent>
    </Modal>
  );
};

export default LoadingModal;
