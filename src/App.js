import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
       <Weather />
      <footer>
        This project is coded by <a href="https://github.com/Mavooma" target="_blank" rel="noopener noreferrer">Vuyelwa Mavuma</a> and is {" "}
        <a href="https://github.com/Mavooma/react-weather-app" target="_blank" rel="noopener noreferrer">
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
