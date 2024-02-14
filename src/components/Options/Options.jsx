export default function Options({ updateFeedback, totalFeedback }) {
  return (
    <ul>
      <li>
        <button onClick={() => updateFeedback("good")}>Good </button>
      </li>
      <li>
        <button onClick={() => updateFeedback("neutral")}>Neutral </button>
      </li>
      <li>
        <button onClick={() => updateFeedback("bad")}>Bad </button>
      </li>
      <li>
        {totalFeedback > 0 && (
          <button onClick={() => updateFeedback("reset")}>Reset </button>
        )}
      </li>
    </ul>
  );
}
