import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./assets/component/Header/Header";
import { Outlet, useNavigation } from "react-router-dom";

function App() {
  const navigation = useNavigation();
  return (
    <div className="App">
      <Header></Header>
      <div>{navigation.state === "loading" && "loading..."}</div>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
