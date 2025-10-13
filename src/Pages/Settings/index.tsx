import { SaveIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Input } from "../../components/Input";
import { MainTemplate } from "../../Templates/MainTemplate";
import { Button } from "../../components/Button";
import { useRef } from "react";
import { useTaskContext } from "../../Contexts/TaskContext/useTaskContext";
import { showMessage } from "../../Adapters/showMessage";

export function Settings() {
  const { state } = useTaskContext();
  const workTimeInput = useRef<HTMLInputElement>(null);
  const formErrors = [];
  const shortBreakTimeInput = useRef<HTMLInputElement>(null);
  const longBreakTimeInput = useRef<HTMLInputElement>(null);
  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    showMessage.dismiss();
    const workTime = Number(workTimeInput.current?.value);
    const shotBreakTime = Number(shortBreakTimeInput.current?.value);
    const longBreakTime = Number(longBreakTimeInput.current?.value);

    if (isNaN(workTime) || isNaN(shotBreakTime) || isNaN(longBreakTime)) {
      formErrors.push("Por favor utilize somente números");
    }

    if (workTime < 1 || workTime > 99) {
      formErrors.push("Digite valores entre 1 e 99 para Foco");
    }

    if (shotBreakTime < 1 || shotBreakTime > 30) {
      formErrors.push("Digite valores entre 1 e 30 para Foco");
    }

    if (longBreakTime < 1 || longBreakTime > 60) {
      formErrors.push("Digite valores entre 1 e 60 para Foco");
    }

    if (formErrors.length > 0) {
      formErrors.forEach((error) => {
        showMessage.error(error);
      });
      return;
    }
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>
      <Container>
        <p style={{ textAlign: "center" }}>
          Adicione os tempos que deseja de foco, descanso curto e descanso
          longo.
        </p>
      </Container>
      <Container>
        <form onSubmit={handleSaveSettings} action="" className="form">
          <div className="formRow">
            <Input
              id="workTime"
              labelText="Foco"
              ref={workTimeInput}
              defaultValue={state.config.workTime}
              type="number"
            ></Input>
          </div>
          <div className="formRow">
            <Input
              id="shortBreakTime"
              labelText="Descanso Curto"
              ref={shortBreakTimeInput}
              defaultValue={state.config.shortBreakTime}
              type="number"
            ></Input>
          </div>
          <div className="formRow">
            <Input
              id="longBreakTime"
              labelText="Descanso Longo"
              ref={longBreakTimeInput}
              defaultValue={state.config.longBreakTime}
              type="number"
            ></Input>
          </div>
          <div className="formRow">
            <Button
              icon={<SaveIcon />}
              aria-label="Salvar configurações"
              title="Salvar configurações"
            ></Button>
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
