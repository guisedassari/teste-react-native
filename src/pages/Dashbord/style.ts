import styled from "styled-components";

export const Title = styled.h1`
  font-size: 45px;
  color: #3a3a3a;
  margin-top: 80px;
`;

export const Logo = styled.img`
  max-width: 200px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 024px;
    border: 0;
    border-radius: 5px 0px 0px 5px;
    color: #333333;

    &:placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #06dcdb;
    border: 0;
    border-radius: 0px 5px 5px 0px;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: #03afad;
    }
  }
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
