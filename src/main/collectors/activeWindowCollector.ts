import { activeWindow } from "get-windows";

export interface ActiveWindowInfo {
  appName: string;
  windowTitle: string;
}

export async function getActiveWindow(): Promise<ActiveWindowInfo> {
  const window = await activeWindow();

  if (!window) {
    return {
      appName: "Unknown",
      windowTitle: "No Active Window"
    };
  }

  return {
    appName: window.owner.name,
    windowTitle: window.title
  };
}