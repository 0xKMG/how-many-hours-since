import CountdownTimer from "./CountdownTimer";

import "./App.css";

export default function App() {
  const NOW_IN_MS = new Date().getTime();

  return (
    <div>
      <h1>Countdown Timer</h1>
      <CountdownTimer targetDate={NOW_IN_MS} />
    </div>
  );
}
