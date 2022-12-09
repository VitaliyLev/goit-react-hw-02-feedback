import {Good, Neutral, Bad} from './Statistics.styled'

export function Statistics({
  good,
  neutral,
  bad,
  countTotalFeedback,
  PositiveFeedbackPercentage,
}) {
  return (
    <>
      <Good>Good: {good}</Good>
      <Neutral>Neutral: {neutral}</Neutral>
      <Bad>Bad: {bad}</Bad>
      <p>Total: {countTotalFeedback}</p>
      <Good>Positive feedback: {PositiveFeedbackPercentage}%</Good>
    </>
  );
}
