import { TaskContextProvider } from "./Contexts/TaskContext/TaskContextProvider";

import "./styles/global.css";
import "./styles/theme.css";
import { MessagesContainer } from "./MessagesContainer";
import { MainRouter } from "./Routers/MainRouter";

export function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <MainRouter />
      </MessagesContainer>
    </TaskContextProvider>
  );
}
