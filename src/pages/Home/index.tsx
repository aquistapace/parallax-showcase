import React from "react";
import { Container, Parallax, Content, Wrapper } from "./styles";


const Home: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <span>O que fazer no ...</span>
          <h1>FERIADO</h1>
        </Content>
        <Parallax />
      </Wrapper>
    </Container>
  );
};

export default Home;
