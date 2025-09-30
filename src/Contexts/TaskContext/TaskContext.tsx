import { createContext } from "react";
import type { TasksStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";
import type { TaskActionModel } from "./TaskActions";

type TypeContextProps = {
  state: TasksStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
};

const initialContextValue = {
  state: initialTaskState,
  dispatch: () => {},
};

export const TaskContext = createContext<TypeContextProps>(initialContextValue);
