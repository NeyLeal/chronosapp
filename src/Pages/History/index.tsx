import { TrashIcon } from "lucide-react";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../Templates/MainTemplate";
import styles from "./styles.module.css";
import { useTaskContext } from "../../Contexts/TaskContext/useTaskContext";
import { formatDate } from "../../utils/FormatDate";
import { GetTaskStatus } from "../../utils/GetTaskStatus";
import { GenericHtml } from "../../components/GenericHTML";
import { showMessage } from "../../Adapters/showMessage";
import { useEffect, useState } from "react";
import { TaskActionTypes } from "../../Contexts/TaskContext/TaskActions";

export function History() {
  const { state, dispatch } = useTaskContext();
  const [confirmClearHistory, setConfrimClearHistory] = useState(false);
  const hasTasks = state.tasks.length > 0;
  const sortedTasks = [...state.tasks].sort((a, b) => {
    return b.startDate - a.startDate;
  });
  useEffect(() => {
    document.title = "Histórico - Chronos Pomodoro";
  }, []);
  useEffect(() => {
    return () => {
      showMessage.dismiss();
    };
  }, []);

  useEffect(() => {
    if (!confirmClearHistory) return;
    setConfrimClearHistory(false);
    dispatch({ type: TaskActionTypes.RESET_TASK });
  }, [confirmClearHistory, dispatch]);

  function handleResetHistory() {
    showMessage.dismiss();
    showMessage.confirm("Gostaria de apagar o histórico?", (confirmation) => {
      setConfrimClearHistory(confirmation);
    });
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
            <h3>Ainda não existem tarefas criadas.</h3>
          </GenericHtml>
        )}
      </Container>
    </MainTemplate>
  );
}
