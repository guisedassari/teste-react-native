import styled from "styled-components";
export const Title = styled.h1`
  font-size: 45px;
  color: #3a3a3a;
  margin-top: 80px;
`;

export const Movies = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  a + a {
    margin-top: 16px;
  }

  img {
    width: 100px;
    height: 150px;
    border-radius: 5px;
  }

  div {
    margin: 0px 16px;
    /* max-width: 450px; */
    flex: 1;

    strong {
      font-size: 28;
      color: #303d4d;
    }

    p {
      font-size: 14px;
      color: #a8a8b3;
      margin-top: 4px;
      text-align: justify;
    }
  }
  svg {
    margin-left: auto;
    color: #cbcbd6;
  }
`;
