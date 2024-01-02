import { Heading, Block } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Block>
      <Heading>{title}</Heading>
      {children}
    </Block>
  );
};
