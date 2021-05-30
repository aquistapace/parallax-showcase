import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 5rem;
  background: #fff;
  width: 100%;
  img {
    width: 90px;
  }
`;

export const Menu = styled.div`
  > nav {
    font-size: 1rem;
    > a {
      margin-right: 1rem;
      color:${props=>props.theme.textColor};
      :hover {
        color: ${(props) => props.theme.primaryColor};
        border-bottom:4px solid ${(props) => props.theme.primaryColor};
      }
    }
  }
`;
