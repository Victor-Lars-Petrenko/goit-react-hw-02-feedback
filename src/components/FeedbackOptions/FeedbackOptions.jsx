import { Button, Caption, BtnList, Wrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Wrapper>
      <Caption>Please leave feedback</Caption>
      <BtnList>
        {options.map(option => (
          <li key={option}>
            <Button onClick={onLeaveFeedback}>{option}</Button>
          </li>
        ))}
      </BtnList>
    </Wrapper>
  );
};
