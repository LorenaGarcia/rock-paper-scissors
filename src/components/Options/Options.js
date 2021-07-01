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

const Options = ({ userWon, cpuWon, isDisabled, setUserMovement }) => {
  return (
    <Container>
      <FlexOptions>
        <Circle
          disabled={isDisabled}
          onClick={() => !isDisabled && setUserMovement("R")}
          background={"#9a7580"}
          shadow={"4px 5px 3px 0px #62424b"}
        >
          <ImageOptions src={imgRock} alt="rock" />
        </Circle>
        <Circle
          disabled={isDisabled}
          onClick={() => !isDisabled && setUserMovement("P")}
          background={"#68857F"}
          shadow={"4px 5px 3px 0px #37514C"}
        >
          <ImageOptions src={imgPaper} alt="paper" />
        </Circle>
        <Circle
          disabled={isDisabled}
          onClick={() => !isDisabled && setUserMovement("S")}
          background={"#8B8B8B"}
          shadow={"4px 5px 3px 0px #565656"}
        >
          <ImageOptions src={imgScissors} alt="scissors" />
        </Circle>
      </FlexOptions>
      <TitleScore>Score</TitleScore>
      <FlexContainer>
        <Title>Me</Title> <Title>Computer</Title>
      </FlexContainer>
      <FlexContainer>
        <Accountant>{userWon}</Accountant> <Accountant>{cpuWon}</Accountant>
      </FlexContainer>
    </Container>
  );
};

export { Options };
