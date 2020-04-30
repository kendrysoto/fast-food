import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';


const Header = () => {
  const Container = styled.div`
  background-color: #b92b27;
  height: 70px;
  padding: 10px;
`;
  return (
    <header>
      <Container>
        <nav class="breadcrumb is-right" aria-label="breadcrumbs">
          <ul >
            <li>
              <Link class="has-text-white-ter is-size-5" href="#" to="/">
                Inicio
            </Link>
            </li>

            <li>
              <Link class="has-text-white-ter is-size-5" href="#" to="/Pizzas">
                Pizzas
            </Link>
            </li>

            <li>
              <Link class="has-text-white-ter is-size-5" href="#" to="/Pollos">
                Pollos
            </Link>
            </li>

            <li>
              <Link class="has-text-white-ter is-size-5" href="#" to="/Postres">
                Postres
            </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
