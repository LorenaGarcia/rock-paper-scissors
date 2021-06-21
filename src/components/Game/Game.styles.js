import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1rem;
`;

const Icon = styled.img`
  width: 2rem;
  height: 2rem;
`;

const HR = styled.hr`
  width: 70%;
  border: none;
  border-top: 4px dotted #888888;

  @media (max-width: 480px) {
    width: 60%;
  }
`;

export { Container, Icon, HR };
