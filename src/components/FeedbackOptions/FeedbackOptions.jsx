import { Component } from 'react';
import { Button, Caption, BtnList, Wrapper } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  render() {
    return (
      <Wrapper>
        <Caption>Please leave feedback</Caption>
        <BtnList>
          {this.props.options.map(option => (
            <li key={option}>
              <Button onClick={this.props.onLeaveFeedback}>{option}</Button>
            </li>
          ))}
        </BtnList>
      </Wrapper>
    );
  }
}
