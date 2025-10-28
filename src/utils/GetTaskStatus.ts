import type { TaskModel } from "../models/TaskModels";

export function GetTaskStatus(task: TaskModel, activeTask: TaskModel | null) {
  if (task.completeDate) return "Completa";
  if (task.interruptDate) return "Interrompida";
  if (task.id === activeTask?.id) return "Em Progresso";
  return "Abandonada";
}
