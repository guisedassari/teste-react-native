import React from "react";
import { Link } from "react-router-dom";

import { Header } from "./style";
import logoImg from "../../assets/logo.png";

const Menu: React.FC = () => {
  return (
    <Header>
      <img src={logoImg} alt="Logo do site" />
      <ul>
        <li>
          <Link to="/">Voltar</Link>
        </li>
        <li>
          <Link to="/Lists">Listas</Link>
        </li>
      </ul>
    </Header>
  );
};

export default Menu;
