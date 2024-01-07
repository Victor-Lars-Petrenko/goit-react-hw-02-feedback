import { Caption, Block } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Block>
      <Caption>{title}</Caption>
      {children}
    </Block>
  );
};
