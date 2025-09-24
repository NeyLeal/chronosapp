import { createContext, useContext, useState } from "react";
import type { TasksStateModel } from "../../models/TaskStateModel";

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

type TrypeContextProps = {
  state: TasksStateModel;
  setState: React.Dispatch<React.SetStateAction<TasksStateModel>>;
};

export const TaskContext = createContext<TrypeContextProps>({
  state: initialState,
  setState: () => {},
});

type TaskContextProvider = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProvider) {
  const [state, setState] = useState(initialState);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  return useContext(TaskContext);
}
