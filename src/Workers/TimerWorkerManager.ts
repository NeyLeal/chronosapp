import type { TasksStateModel } from "../models/TaskStateModel";

let instance: TimerWorkerManager | null = null;

export class TimerWorkerManager {
  private worker: Worker;

  private constructor() {
    this.worker = new Worker(new URL("./TimerWorker.js", import.meta.url));
  }

  static getInstance() {
    if (!instance) {
      instance = new TimerWorkerManager();
    }
    return instance;
  }

  portMessage(message: TasksStateModel) {
    this.worker.postMessage(message);
  }

  onmessege(cb: (e: MessageEvent) => void) {
    this.worker.onmessage = cb;
  }

  terminate() {
    this.worker.terminate();
    instance = null;
  }
}
