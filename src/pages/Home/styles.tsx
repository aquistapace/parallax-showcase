import styled from "styled-components";
import background from "../../assets/Presentation.png";

export const Container = styled.div`
  display: flex;
  width: 100%;
`;
export const Wrapper = styled.div`
  display: flex;
  width: 1024px;
  justify-content: space-between;
  margin: 0 auto;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color:${(props) => props.theme.textColor};
  > h1 {
    font-size: 5.063rem;
    
  }
  > span {
    font-size: 1.5rem;
  }
  > button {
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 5px;
    background: ${(props) => props.theme.primaryColor};
    font-size: 1rem;
  }
`;

export const Parallax = styled.div`
  flex: 2;
  /* Coloque a imagem a ser usada como background */
  background-image: url(${background});
  width: 100%;

  /* Defina uma altura para a visão que o usuário terá da imagem */
  min-height: 650px;
  /* defina o background como fixo e posicione a imagem */
  background-attachment: fixed;
  background-position: 75% 25%;
  background-repeat: no-repeat;
  background-size: 40%;
`;
