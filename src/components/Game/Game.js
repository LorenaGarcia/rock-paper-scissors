import React from "react";
import { Container, Icon, HR } from "./Game.styles";

import imageRock from "../../images/mini-r.png";
import imagePaper from "../../images/mini-p.png";
import imageScissor from "../../images/mini-p.png";

const Game = () => {
  return (
    <Container>
      <Icon src={imageRock} alt="rock" />
      <HR />
      <Icon src={imagePaper} alt="paper" />
    </Container>
  );
};

export { Game };
