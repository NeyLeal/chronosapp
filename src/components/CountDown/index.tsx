import { useTaskContext } from "../../Contexts/TaskContext";
import styles from "./styles.module.css";

export function CountDown() {
  const { state, setState } = useTaskContext();

  return (
    <div className={styles.countDown}>{state.formattedSegondsRemaining}</div>
  );
}
