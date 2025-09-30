import { useEffect, useReducer } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { TaskReducer } from "./TaskReducer";
import { TimerWorkerManager } from "../../Workers/TimerWorkerManager";

type TaskContextProvider = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProvider) {
  const [state, dispatch] = useReducer(TaskReducer, initialTaskState);

  const worker = TimerWorkerManager.getInstance();

  worker.onmessege((e) => {
    const countDownSeconds = e.data;
    console.log(e.data);

    if (countDownSeconds <= 0) {
      worker.terminate();
    }
  });

  useEffect(() => {
    if (!state.activeTask) {
      worker.terminate();
    }
    worker.portMessage(state);
  }, [worker, state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
