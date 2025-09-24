import type { TasksStateModel } from "../../models/TaskStateModel";

export const initialState: TasksStateModel = {
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
