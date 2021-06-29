import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  text-align: center;
`;

const TextRound = styled.p`
  color: ${(props) => (props.oneMore ? "#d2a10d" : "#ffffff")};
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  margin: 1rem 0rem;
`;

const Containerwinner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextWinner = styled.p`
  font-family: "Oswald", sans-serif;
  font-size: 45px;
  font-weight: bold;
  text-shadow: 0 0 2px #2196f3, 0 0 5px #2196f3, 0 0 10px #2196f3;
  color: #ffffff;
  margin: 0;
  padding: 2rem;
`;

export { Container, TextRound, Containerwinner, TextWinner };
