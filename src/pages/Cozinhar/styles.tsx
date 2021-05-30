import styled from "styled-components";
import background from "../../assets/Instashot.png";

export const Container = styled.div`
  display: flex;
  width: 100%;
  background: ${(props) => props.theme.primaryColor};
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
  > span {
    font-size: 2.25rem;
  }
`;

export const Parallax = styled.div`
  flex: 2;
  background-image: url(${background});
  width: 100%;
  min-height: 650px;
  background-attachment: fixed;
  background-position: 75% 25%;
  background-repeat: no-repeat;
  background-size: 35%;
`;
