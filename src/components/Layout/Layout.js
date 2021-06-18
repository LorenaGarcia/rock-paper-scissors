import React from "react";
import { Container, Header, Main, ContainerMain, Title } from "./Layout.styles";

const Layout = ({ children }) => {
  return (
    <Container>
      <Header>
        <Title>Rock, Paper & Scissors</Title>
      </Header>
      <Main>
        <ContainerMain>{children}</ContainerMain>
      </Main>
    </Container>
  );
};

export { Layout };
