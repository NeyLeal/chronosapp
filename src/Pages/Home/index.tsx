import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import type { TasksStateModel } from "../../models/TaskStateModel";
import { MainTemplate } from "../../Templates/MainTemplate";

type HomeProps = {
  state: TasksStateModel;
  setState: React.Dispatch<React.SetStateAction<TasksStateModel>>;
};

export function Home(props: HomeProps) {
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
