import React from "react";
import { Container, Parallax, Content, Wrapper } from "./styles";

const Jogar: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <span>Jogar um carteado com os amigos.</span>
        </Content>
        <Parallax />
      </Wrapper>
    </Container>
  );
};

export default Jogar;
