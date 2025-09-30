import type { TasksStateModel } from "./TaskStateModel";

export type TaskModel = {
  id: string;
  name: string;
  durationInMinutes: number;
  startDate: number;
  completeDate: number | null;
  interruptDate: number | null;
  duration: number;
  type: keyof TasksStateModel["config"];
};
