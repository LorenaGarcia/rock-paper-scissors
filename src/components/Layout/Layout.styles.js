import styled from "styled-components";

const Container = styled.div`
  display: grid;
  background-color: black;
  height: 100vh;
  grid-gap: 2rem;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "main";
`;

const Header = styled.div`
  grid-area: header;
`;

const Main = styled.div`
  grid-area: main;
  display: flex;
  justify-content: center;
`;

const Title = styled.p`
  color: #ffffff;
  text-align: center;
  font-size: 30px;
  margin: 1rem;
`;

const ContainerMain = styled.div`
  width: 50%;
  max-width: 700px;

  @media (max-width: 480px) {
    width: 100%;
    margin: 0rem 2rem;
  }
`;

export { Container, Header, Main, Title, ContainerMain };
