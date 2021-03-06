import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 2rem;
`;

const FlexOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2rem;
`;

const ImageOptions = styled.img`
  width: 100px;
  height: 100px;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;

const Circle = styled.div`
  background: ${(props) => props.background && props.background};
  box-shadow: ${(props) => props.shadow && props.shadow};
  border-radius: 100%;
  padding: 0.5rem;
  opacity: ${(props) => (props.disabled ? "0.4" : "initial")};

  :hover {
    box-shadow: ${(props) =>
      props.background &&
      "0 0 5px" +
        props.background +
        ", 0 0 10px " +
        props.background +
        ", 0 0 20px " +
        props.background};
  }
`;

const FlexContainer = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.p`
  font-family: "Oswald", sans-serif;
  margin: 0;
  margin-bottom: 0.5rem;
  font-size: 20px;
  font-weight: bold;
`;

const Accountant = styled.p`
  font-family: "Oswald", sans-serif;
  margin: 0;
  margin-bottom: 0.5rem;
  font-size: 16px;
  font-weight: bold;
`;

const TitleScore = styled.p`
  font-family: "Oswald", sans-serif;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 0.5rem;
  color: #ffffff;
  text-align: center;
`;

export {
  Container,
  ImageOptions,
  FlexOptions,
  Circle,
  FlexContainer,
  Title,
  Accountant,
  TitleScore,
};
