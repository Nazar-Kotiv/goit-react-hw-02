export default function Feedback({ feedbackTypes, calculateTotalFeedback }) {
  return (
    <ul>
      <li>
        <p>Good: {feedbackTypes.good}</p>
      </li>
      <li>
        <p>Neutral: {feedbackTypes.neutral} </p>
      </li>
      <li>
        <p>Bad: {feedbackTypes.bad}</p>
      </li>
      <li>
        <p>Positive: {calculateTotalFeedback}%</p>
      </li>
    </ul>
  );
}
