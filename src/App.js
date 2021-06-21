import React, { useState, useEffect } from "react";
import axios from "axios";

import { Layout } from "./components/Layout";
import { Options } from "./components/Options";
import { Game } from "./components/Game";

import imageRock from "./images/mini-r.png";
import imagePaper from "./images/mini-p.png";
import imageScissor from "./images/mini-s.png";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState(null);
  const [userWon, setUserWon] = useState(0);
  const [cpuWon, setCpuWon] = useState(0);
  const [allMovements, setAllMovements] = useState([]);
  const [userMovement, setUserMovement] = useState(null);
  const [cpuMovement, setCPUMovement] = useState(null);

  useEffect(() => {
    if (userMovement) {
      setIsLoading(true);
      startGame();
    }
  }, [userMovement]);

  useEffect(() => {
    if (userMovement && cpuMovement) {
      setIsLoading(true);
      setAllMovements([
        {
          user: userMovement,
          cpu: cpuMovement,
        },
        ...allMovements,
      ]);
      winner(userMovement + cpuMovement);
      setUserMovement(null);
      setCPUMovement(null);
      setIsLoading(false);
    }
  }, [cpuMovement]);

  useEffect(() => {
    if (allMovements.length !== 0 && allMovements.length === 6) {
      setIsLoading(true);
      if (userWon > cpuWon) {
        setMessage("You win!!!");
      } else if (userWon < cpuWon) {
        setMessage("You lost!!!");
      } else {
        setMessage("It's a tie");
      }
      setIsLoading(false);

      setTimeout(() => {
        setGameOver(true);
      }, 1000);
    }
  }, [allMovements]);

  const startGame = async (user) => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `https://smartplay.afiniti.com/v1/play/${userMovement}`
      );
      setCPUMovement(data.nextBestMove);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const images = (image) => {
    switch (image) {
      case "R":
        return imageRock;
      case "S":
        return imageScissor;
      case "P":
        return imagePaper;
      default:
        return imageRock;
    }
  };

  const winner = (movements) => {
    switch (movements) {
      case "RS":
      case "PR":
      case "SP":
        setUserWon(userWon + 1);
        break;
      case "RR":
      case "PP":
      case "SS":
        setUserWon(userWon + 1);
        setCpuWon(cpuWon + 1);
        break;
      default:
        setCpuWon(cpuWon + 1);
    }
  };
  console.log("gameOver", gameOver);

  return (
    <Layout>
      <Options
        userWon={userWon}
        cpuWon={cpuWon}
        setUserMovement={setUserMovement}
      />
      {allMovements.length !== 0 && (
        <p style={{ color: "red" }}>Round {allMovements.length}</p>
      )}
      {isLoading && <p style={{ color: "blue" }}>Loading...</p>}
      {!gameOver && allMovements ? (
        allMovements.map((value, idx) => (
          <Game key={idx} user={value.user} cpu={value.cpu} images={images} />
        ))
      ) : (
        <p style={{ color: "yellow" }}>{message}</p>
      )}
    </Layout>
  );
}

export default App;
