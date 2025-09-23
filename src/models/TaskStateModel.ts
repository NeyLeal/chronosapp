import type { TaskModel } from "./TaskModels";

export type TasksStateModel = {
  tasks: TaskModel[];
  secondsRemaining: number;
  formattedSegondsRemaining: string;
  activeTask: TaskModel | null;
  currentCycle: number;
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};
