import React from "react";
import { Container, Parallax, Content, Wrapper } from "./styles";

const AssistirTV: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <span>Assistir filmes que estão a tempos na sua lista de filmes.</span>
        </Content>
        <Parallax />
      </Wrapper>
    </Container>
  );
};

export default AssistirTV;
