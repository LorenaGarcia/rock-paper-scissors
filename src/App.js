import React from "react";
import { Layout } from "./components/Layout";
import { Options } from "./components/Options";
import { Game } from "./components/Game";

function App() {
  return (
    <Layout>
      <Options />
      <Game />
    </Layout>
  );
}

export default App;
