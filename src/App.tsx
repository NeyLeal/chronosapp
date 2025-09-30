import { Home } from "./Pages/Home";
import { TaskContextProvider } from "./Contexts/TaskContext/TaskContextProvider";

import "./styles/global.css";
import "./styles/theme.css";

export function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}
