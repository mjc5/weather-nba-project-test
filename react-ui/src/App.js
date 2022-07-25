import React from "react";
import rsLogo from "./logo-with-name.png";
import "./styles/App.css";
import { Body } from "./components/Body";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={rsLogo} className="App-logo" alt="logo" />
      </header>
      <main>
        <div class="button-group">
          <Body />
        </div>
      </main>
    </div>
  );
}

export default App;
