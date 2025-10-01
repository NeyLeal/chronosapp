import type { TasksStateModel } from "../../models/TaskStateModel";

export const initialTaskState: TasksStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSegondsRemaining: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 1,
    shortBreakTime: 1,
    longBreakTime: 1,
  },
};
