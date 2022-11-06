import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Header } from "./components.js/Header";
import { Footer } from "./components.js/Footer";
import { InputBook } from "./components.js/InputBook";
import { Overview } from "./components.js/Overview";

function App() {
  return (
    <div className="w-screen h-screen bg-gray-200 flex flex-col justify-between ">
      <Header />
      <Overview />
      <Footer />
    </div>
  );
}

export default App;
