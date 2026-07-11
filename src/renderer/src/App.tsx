import "./App.css";

function App() {
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
            <span>🟡 IPC</span>
            <span>Coming Soon</span>
          </div>
        </section>

        <section className="card">
          <h2>Current Milestone</h2>

          <p>Foundation Complete</p>

          <hr />

          <p>
            <strong>Next:</strong> Desktop Activity Collection
          </p>
        </section>
      </div>
    </main>
  );
}

export default App;