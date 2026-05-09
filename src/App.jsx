import { useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import samples from "./data/samples";
import WelcomePage from "./components/WelcomePage";
// import ConsentPage from "./components/ConsentPage";
import SurveyPage from "./components/SurveyPage";
import ThankYouPage from "./components/ThankYouPage";

// Pages (string-based state machine — no router needed for a linear flow)
const PAGE = {
  WELCOME: "welcome",
  CONSENT: "consent",
  SURVEY: "survey",
  THANKYOU: "thankyou",
};

export default function App() {
  const [page, setPage] = useState(PAGE.WELCOME);
  const [currentSampleIdx, setCurrentSampleIdx] = useState(0);
  const [rankings, setRankings] = useState([]);
  // Generate a stable session ID once on first render
  const [sessionId] = useState(() => uuidv4());

  const handleStart = useCallback(() => setPage(PAGE.SURVEY), []);
  // const handleConsent = useCallback(() => setPage(PAGE.SURVEY), []);

  const handleNext = useCallback(
    (result) => {
      const updatedRankings = [...rankings, result];
      setRankings(updatedRankings);

      if (currentSampleIdx + 1 < samples.length) {
        setCurrentSampleIdx((i) => i + 1);
      } else {
        setPage(PAGE.THANKYOU);
      }
    },
    [rankings, currentSampleIdx]
  );

  if (page === PAGE.WELCOME) {
    return <WelcomePage onStart={handleStart} />;
  }

  // if (page === PAGE.CONSENT) {
  //   return <ConsentPage onConsent={handleConsent} />;
  // }

  if (page === PAGE.SURVEY) {
    return (
      <SurveyPage
        key={samples[currentSampleIdx].id}
        sample={samples[currentSampleIdx]}
        currentIndex={currentSampleIdx}
        total={samples.length}
        onNext={handleNext}
      />
    );
  }

  if (page === PAGE.THANKYOU) {
    return <ThankYouPage sessionId={sessionId} rankings={rankings} />;
  }

  return null;
}
