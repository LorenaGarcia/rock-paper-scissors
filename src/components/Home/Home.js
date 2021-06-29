import React from "react";
import { Container, Button } from "./Home.styles";

const Home = ({ setStartPlay }) => {
  return (
    <Container>
      <Button onClick={() => setStartPlay(true)}>Let's Game</Button>
    </Container>
  );
};

export { Home };
