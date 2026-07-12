import { ipcMain } from "electron";
import { getActiveWindow } from "../collectors/activeWindowCollector";

export function registerTrackerIPC(): void {
  ipcMain.handle("tracker:getActiveWindow", async () => {
    return await getActiveWindow();
  });
}