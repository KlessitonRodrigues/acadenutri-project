import { Section } from 'src/lib/styled/Containers';
import { Column } from 'src/lib/styled/Flex';

const Section1 = () => {
  return (
    <Section p="1rem 2rem 0">
      <Column w="50%" m="auto" gap={10}>
        <h1>We offer exclusive benefits for you</h1>
        <p>
          In addition to being able to create routines, carry out anamnesis and anthropometric
          assessments, for every purchase your student makes through the app, you will receive a 1%
          commission.
        </p>
      </Column>
    </Section>
  );
};

export default Section1;
