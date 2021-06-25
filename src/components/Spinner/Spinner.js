import React from "react";
import { Container, Loading } from "./Spiner.styles";
import spinner from "../../images/loading.gif";

const Spinner = () => {
  return (
    <Container>
      <Loading src={spinner} alt="loading" />
    </Container>
  );
};

export { Spinner };
