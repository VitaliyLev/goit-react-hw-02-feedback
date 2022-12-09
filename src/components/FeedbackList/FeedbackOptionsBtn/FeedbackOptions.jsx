import { Button } from "./FeedbackOptions.styled";

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {Object.keys(options).map(key => (
        <Button key={key} type="button" onClick={() => onLeaveFeedback(key)}>
          {key}
        </Button>
      ))}
    </>
  );
}
