import { Button } from "@my/core";
import { Thing } from "@my/theme-kit";
import "@my/theme-kit/dist/tailwind.css";
import React from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx123</code> and save to reload.
        </p>
        <Thing />
        <Button />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

          Learn React
          123
          567
          567
          567
          567
        </a>
      </header>
    </div>
  );
}

export default App;
