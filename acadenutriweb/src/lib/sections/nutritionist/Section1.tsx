import { Section } from 'src/lib/styled/Containers';
import { Column } from 'src/lib/styled/Flex';

const Section1 = () => {
  return (
    <Section p="1rem 2rem 0">
      <Column w="50%" m="auto" gap={10}>
        <h1>Nutritionists</h1>
        <p>Experience a new moment in interaction with your patients</p>
      </Column>
    </Section>
  );
};

export default Section1;
