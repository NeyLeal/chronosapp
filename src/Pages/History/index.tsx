import { TrashIcon } from "lucide-react";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../Templates/MainTemplate";
import styles from "./styles.module.css";
import { useTaskContext } from "../../Contexts/TaskContext/useTaskContext";
import { formatDate } from "../../utils/FormatDate";
import { GetTaskStatus } from "../../utils/GetTaskStatus";
import { TaskActionTypes } from "../../Contexts/TaskContext/TaskActions";
import { GenericHtml } from "../../components/GenericHTML";

export function History() {
  const { state, dispatch } = useTaskContext();
  const hasTasks = state.tasks.length > 0;
  const sortedTasks = [...state.tasks].sort((a, b) => {
    return b.startDate - a.startDate;
  });

  function handleResetHistory() {
    if (!confirm("Gostaria de apagar o histórico?")) return;
    dispatch({ type: TaskActionTypes.RESET_TASK });
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>Histórico</span>
          {hasTasks && (
            <span className={styles.buttonContainer}>
              <Button
                icon={<TrashIcon />}
                color="red"
                aria-label="Apagar histórico"
                title="Apagar histórico"
                onClick={handleResetHistory}
              ></Button>
            </span>
          )}
        </Heading>
      </Container>
      <Container>
        {(hasTasks && (
          <div className={styles.responsiveTable}>
            <table>
              <thead>
                <tr>
                  <th>Tarefa</th>
                  <th>Duração</th>
                  <th>data</th>
                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              <tbody>
                {sortedTasks.map((task) => {
                  const taskTypeDictionary = {
                    workTime: "Foco",
                    shortBreakTime: "Descanso Curto",
                    longBreakTime: "Descanso Longo",
                  };
                  return (
                    <tr key={task.id}>
                      <td>{task.name}</td>
                      <td>{task.duration}min</td>
                      <td>{formatDate(task.startDate)}</td>
                      <td>{GetTaskStatus(task, state.activeTask)}</td>
                      <td>{taskTypeDictionary[task.type]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )) || (
          <GenericHtml>
            <h3>Ainda nao há tarefas.</h3>
          </GenericHtml>
        )}
      </Container>
    </MainTemplate>
  );
}
