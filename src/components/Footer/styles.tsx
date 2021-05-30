import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: #2f2e41;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  > span {
    color: #fff;
    font-size: 1rem;
    >a{
      color:${props=>props.theme.primaryColor}
    }
  }
`;
