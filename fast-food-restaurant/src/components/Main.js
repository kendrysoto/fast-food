import React from "react";
import { Switch, Route } from "react-router-dom";
import Pizzas from './Pizzas';
import Home from "./Home";
import Pollos from './Pollos';
import Postres from './Postres';
import styled from 'styled-components';

const Main = () => {
const Container = styled.div`
background: #FFE000; 
height: 31em;
`;
  return (
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Pizzas" component={Pizzas} />
        <Route path="/Pollos" component={Pollos} />
        <Route path="/Postres" component={Postres} />
      </Switch>
    </Container>
  );
};

export default Main;
