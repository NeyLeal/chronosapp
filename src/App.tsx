import { useState } from "react";
import { Home } from "./Pages/Home";

import "./styles/global.css";
import "./styles/theme.css";
import type { TasksStateModel } from "./models/TaskStateModel";

const initialState: TasksStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSegondsRemaining: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

export function App() {
  const [state, setState] = useState(initialState);

  return <Home state={state} setState={setState} />;
}
