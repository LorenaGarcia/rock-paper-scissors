import React from "react";
import { Container, Icon, HR } from "./Game.styles";

const Game = ({ user, cpu, images }) => {
  return (
    <Container>
      <Icon src={images(user)} alt={images(user)} />
      <HR />
      <Icon src={images(cpu)} alt={images(cpu)} />
    </Container>
  );
};

export { Game };
