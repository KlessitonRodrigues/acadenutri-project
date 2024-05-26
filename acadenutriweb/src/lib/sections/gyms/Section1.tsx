import { Section } from 'src/lib/styled/Containers';
import { Column } from 'src/lib/styled/Flex';

const Section1 = () => {
  return (
    <Section p="1rem 2rem 0">
      <Column w="50%" m="auto" gap={10}>
        <h1>Get ready for a unique experience</h1>
        <p>
          We offer the technologies for you to manage all your students&apos; training. Students
          will have access to all exercises in videos, greater autonomy to train, learn how to do
          each exercise, have greater training management and much more.
        </p>
      </Column>
    </Section>
  );
};

export default Section1;
