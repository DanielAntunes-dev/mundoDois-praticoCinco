import React from "react";
import { Link } from "react-router-dom";

const MenuNavegacao = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Catálogo
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/dados">
              Novo
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MenuNavegacao;
