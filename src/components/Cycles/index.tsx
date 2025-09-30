import { useTaskContext } from "../../Contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/GetNextCycle";
import { getNextCycleType } from "../../utils/GetNextCycleType";
import styles from "./styles.module.css";

export function Cycles() {
  const { state } = useTaskContext();
  const cycleStep = Array.from({ length: state.currentCycle });
  const descriptionMap = {
    workTime: "foco",
    shortBreakTime: "descanso curto",
    longBreakTime: "descanso longo",
  };

  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>
      <div className={styles.cycleDots}>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          return (
            <span
              key={`${nextCycleType}_${nextCycle}`}
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
              aria-label={`Indicador de ciclo de ${descriptionMap[nextCycleType]}`}
              title={`Indicador de ciclo de ${descriptionMap[nextCycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
