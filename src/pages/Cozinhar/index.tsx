import React from "react";
import { Container, Parallax, Content, Wrapper } from "./styles";

const Cozinhar: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <span>Cozinhar uma comidinha deliciosa.</span>
        </Content>
        <Parallax />
      </Wrapper>
    </Container>
  );
};

export default Cozinhar;
