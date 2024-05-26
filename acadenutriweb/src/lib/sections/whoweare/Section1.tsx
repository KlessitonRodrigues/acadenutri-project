import { Section } from 'src/lib/styled/Containers';
import { Column } from 'src/lib/styled/Flex';

const Section1 = () => {
  return (
    <Section p="3rem 2rem">
      <Column gap={10}>
        <h1>Who We Are</h1>
        <p>We emerged to bring more health to the lives of every human being who meets us.</p>
      </Column>
    </Section>
  );
};

export default Section1;
