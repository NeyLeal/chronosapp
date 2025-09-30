import { useTaskContext } from "../../Contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/GetNextCycle";
import { getNextCycleType } from "../../utils/GetNextCycleType";

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);
  const tipsForWhenActiveTask = {
    workTime: <span>Foque por {state.config.workTime}min</span>,
    shortBreakTime: <span>Descanse por {state.config.shortBreakTime}min</span>,
    longBreakTime: <span>Descanso longo</span>,
  };

  const tipsForNoActiveTask = {
    workTime: <span>Próximo ciclo é de {state.config.workTime}min</span>,
    shortBreakTime: (
      <span>Próximo ciclo é de {state.config.shortBreakTime}min</span>
    ),
    longBreakTime: <span>Prepare-se para um descanso longo</span>,
  };
  return (
    <>
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
    </>
  );
}
