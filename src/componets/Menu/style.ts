import styled from "styled-components";

export const Header = styled.header`
  max-width: 100%;

  display: flex;
  justify-content: space-between;

  img {
    max-width: 200px;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: end;
    flex: 1;
    list-style: none;

    li {
      margin: 15px;

      a {
        color: #333;
        text-decoration: none;
        text-transform: uppercase;
        &:hover {
          color: #03afad;
        }
      }
    }
  }
`;
