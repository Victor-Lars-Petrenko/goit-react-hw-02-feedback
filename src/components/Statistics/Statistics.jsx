import { Caption, Paragraph, EmojiItem, List } from './Statistics.styled';
import { SlLike, SlDislike } from 'react-icons/sl';
import { BsEmojiNeutral } from 'react-icons/bs';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <Caption>Statistics</Caption>
      {Boolean(total) && (
        <List>
          <EmojiItem>
            <SlLike />
            <Paragraph>Good: {good}</Paragraph>
          </EmojiItem>
          <EmojiItem>
            <BsEmojiNeutral />
            <Paragraph>Neutral: {neutral}</Paragraph>
          </EmojiItem>
          <EmojiItem>
            <SlDislike />
            <Paragraph>Bad: {bad}</Paragraph>
          </EmojiItem>
          <li>
            <Paragraph>Total: {total}</Paragraph>
          </li>
          <li>
            <Paragraph>Positive feedback: {positivePercentage}%</Paragraph>
          </li>
        </List>
      )}
    </>
  );
};
