import { Container } from '../../styled/Containers';
import { Row } from '../../styled/Flex';
import { StepLineItem } from '../../styled/Progress';

const StepLine = (props: Props.StepLine) => {
  const { step = 1, steps = 5, onClick } = props;
  const steplines = new Array(steps).fill(0);

  const StepLineItems = steplines.map((item, i) => {
    return (
      <StepLineItem
        key={i}
        active={i < step}
        half={i === step}
        reverse={i === steps - 1}
        onClick={() => onClick && onClick(i)}
      >
        {i + 1}
      </StepLineItem>
    );
  });

  return (
    <Container>
      <Row>{StepLineItems}</Row>
    </Container>
  );
};

export default StepLine;
