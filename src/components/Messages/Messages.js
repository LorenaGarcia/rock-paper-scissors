import React from "react";
import {
  Container,
  TextRound,
  Containerwinner,
  TextWinner,
} from "./Messages.styles";

import { Button } from "../Home/Home.styles";

const Messages = ({ children, oneMore, winner, setStartPlay }) => {
  return (
    <>
      {winner ? (
        <Containerwinner>
          <TextWinner oneMore={oneMore}>{children}</TextWinner>
          <Button onClick={() => setStartPlay(true)}>Let's Game Again</Button>
        </Containerwinner>
      ) : (
        <Container>
          <TextRound oneMore={oneMore}>{children}</TextRound>
        </Container>
      )}
    </>
  );
};

export { Messages };
