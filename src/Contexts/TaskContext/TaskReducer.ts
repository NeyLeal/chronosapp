import type { TasksStateModel } from "../../models/TaskStateModel";
import { formatSecondsToMinutes } from "../../utils/FormatSecondsToMinutes";
import { getNextCycle } from "../../utils/GetNextCycle";
import { TaskActionTypes, type TaskActionModel } from "./TaskActions";

export function TaskReducer(
  state: TasksStateModel,
  action: TaskActionModel
): TasksStateModel {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      const newTask = action.payload;
      const nextCycle = getNextCycle(state.currentCycle);
      const secondsRemaining = newTask.duration * 60;

      return {
        ...state,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSegondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...state.tasks, newTask],
      };
      return state;
    }
    case TaskActionTypes.INTERRUPT_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSegondsRemaining: "00:00",
        tasks: state.tasks.map((task) => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, interruptDate: Date.now() };
          }
          return task;
        }),
      };
    }
    case TaskActionTypes.RESET_TASK: {
      return state;
    }
    case TaskActionTypes.COUNT_DOWN: {
      return {
        ...state,
        secondsRemaining: action.payload.secondsRemaining,
        formattedSegondsRemaining: formatSecondsToMinutes(
          action.payload.secondsRemaining
        ),
      };
    }
    case TaskActionTypes.COMPLETE_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSegondsRemaining: "00:00",
        tasks: state.tasks.map((task) => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, completeDate: Date.now() };
          }
          return task;
        }),
      };
    }
  }
  return state;
}
