import React from "react";
import {
  Container,
  ImageOptions,
  FlexOptions,
  Circle,
  FlexContainer,
  Title,
  Accountant,
  TitleScore,
} from "./Options.styles";

import imgRock from "../../images/rock.png";
import imgPaper from "../../images/paper.png";
import imgScissors from "../../images/scissors.png";

const Options = () => {
  return (
    <Container>
      <FlexOptions>
        <Circle background={"#9a7580"} shadow={"4px 5px 3px 0px #62424b"}>
          <ImageOptions src={imgRock} alt="rock" />
        </Circle>
        <Circle background={"#68857F"} shadow={"4px 5px 3px 0px #37514C"}>
          <ImageOptions src={imgPaper} alt="paper" />
        </Circle>
        <Circle background={"#8B8B8B"} shadow={"4px 5px 3px 0px #565656"}>
          <ImageOptions src={imgScissors} alt="scissors" />
        </Circle>
      </FlexOptions>
      <TitleScore>Score</TitleScore>
      <FlexContainer>
        <Title>Me</Title> <Title>CPU</Title>
      </FlexContainer>
      <FlexContainer>
        <Accountant>1</Accountant> <Accountant>2</Accountant>
      </FlexContainer>
    </Container>
  );
};

export { Options };
