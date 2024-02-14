import { useState } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

import "./App.css";

export default function App() {
  const [feedbackTypes, setFeedbackTypes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setFeedbackTypes({ good: 0, neutral: 0, bad: 0 });
    } else {
      setFeedbackTypes((prevFeedbackTypes) => ({
        ...prevFeedbackTypes,
        [feedbackType]: prevFeedbackTypes[feedbackType] + 1,
      }));
    }
  };
  const totalFeedback =
    feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;

  const calculateTotalFeedback = Math.round(
    ((feedbackTypes.good + feedbackTypes.neutral) / totalFeedback) * 100
  );

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />

      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          feedbackTypes={feedbackTypes}
          calculateTotalFeedback={calculateTotalFeedback}
        />
      )}
    </>
  );
}
