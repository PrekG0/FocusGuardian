import { useEffect, useState } from "react";
import "./App.css";

interface AppStatus {
  appName: string;
  message: string;
  electron: boolean;
  timestamp: string;
}

function App() {
  const [status, setStatus] = useState<AppStatus | null>(null);

  useEffect(() => {
    const loadStatus = async () => {
      try {
        // We'll properly type this later
        // @ts-ignore
        const response = await window.api.getStatus();

        setStatus(response);
      } catch (error) {
        console.error(error);
      }
    };

    loadStatus();
  }, []);

  return (
    <main className="app">
      <div className="container">
        <h1>FocusGuardian</h1>

        <p className="subtitle">
          Privacy-first Desktop Productivity Intelligence
        </p>

        <section className="card">
          <h2>System Status</h2>

          <div className="status">
            <span>🟢 Electron</span>
            <span>Running</span>
          </div>

          <div className="status">
            <span>🟢 React</span>
            <span>Running</span>
          </div>

          <div className="status">
            <span>{status ? "🟢" : "🟡"} IPC</span>
            <span>{status ? "Connected" : "Connecting..."}</span>
          </div>
        </section>

        <section className="card">
          <h2>Main Process</h2>

          <p>
            <strong>Application:</strong>{" "}
            {status?.appName ?? "Loading..."}
          </p>

          <br />

          <p>
            <strong>Message:</strong>{" "}
            {status?.message ?? "Loading..."}
          </p>

          <br />

          <p>
            <strong>Last Updated:</strong>{" "}
            {status?.timestamp ?? "--:--:--"}
          </p>
        </section>
      </div>
    </main>
  );
}

export default App;