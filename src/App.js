import { useState } from "react";
import Section from "./Section";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Notification from "./Notification";

export default function App() {
  const [good, setCounterA] = useState(0);
  const [neutral, setCounterB] = useState(0);
  const [bad, setCounterC] = useState(0);

  const handleIncrement = (option) => {
    if (option === "good") {
      setCounterA((state) => state + 1);
    }
    if (option === "neutral") {
      setCounterB((state) => state + 1);
    }
    if (option === "bad") {
      setCounterC((state) => state + 1);
    }
  };

  const totalClicks = good + neutral + bad;
  const percentage = Math.round((good / totalClicks) * 100);

  return (
    <div>
      <Section>
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={handleIncrement}
        />
      </Section>
      <Section>
        {totalClicks > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalClicks}
            positivePercentage={percentage}
          />
        ) : (
          <Notification message={"No feedback given"} />
        )}
      </Section>
    </div>
  );
}
