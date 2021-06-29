import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  background-color: transparent;
  border: 1px solid #2196f3;
  border-radius: 20px;
  color: #2196f3;
  padding: 2rem;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;

  :hover {
    color: #255784;
    background: #2196f3;
    box-shadow: 0 0 5px #2196f3, 0 0 10px #2196f3, 0 0 20px #2196f3;
  }
`;

export { Container, Button };
