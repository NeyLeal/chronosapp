import { useEffect, useReducer, useRef } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { TaskReducer } from "./TaskReducer";
import { TimerWorkerManager } from "../../Workers/TimerWorkerManager";
import { TaskActionTypes } from "./TaskActions";
import { LoadBeep } from "../../utils/LoadBeep";

type TaskContextProvider = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProvider) {
  const [state, dispatch] = useReducer(TaskReducer, initialTaskState);
  const playBeepRef = useRef<() => void | null>(null);

  const worker = TimerWorkerManager.getInstance();

  worker.onmessege((e) => {
    const countDownSeconds = e.data;

    if (countDownSeconds <= 0) {
      if (playBeepRef.current) {
        playBeepRef.current();
        playBeepRef.current = null;
      }
      dispatch({
        type: TaskActionTypes.COMPLETE_TASK,
      });
    } else {
      dispatch({
        type: TaskActionTypes.COUNT_DOWN,
        payload: { secondsRemaining: countDownSeconds },
      });
    }
  });

  useEffect(() => {
    if (!state.activeTask) {
      worker.terminate();
    }

    document.title =
      `${
        state.formattedSegondsRemaining == "00:00"
          ? "Chronos Pomodoro"
          : state.formattedSegondsRemaining
      }` +
      "  " +
      `${state.activeTask?.name ? state.activeTask?.name : ""}`;
    worker.portMessage(state);
  }, [worker, state]);

  useEffect(() => {
    if (state.activeTask && playBeepRef.current === null) {
      playBeepRef.current = LoadBeep();
    } else {
      playBeepRef.current = null;
    }
  }, [state.activeTask]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
