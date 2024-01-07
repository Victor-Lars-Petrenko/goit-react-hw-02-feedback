import { Button, BtnList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <BtnList>
        {options.map(option => (
          <li key={option}>
            <Button onClick={onLeaveFeedback}>{option}</Button>
          </li>
        ))}
      </BtnList>
    </>
  );
};
