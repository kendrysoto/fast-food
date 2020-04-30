import React from "react";
import { Switch, Route } from "react-router-dom";
import { Datapizza } from './Datapizza';
import Pizza from "./Pizza";
import Fullpizza from "./Fullpizza";
import styled from 'styled-components';

const Pizzas = () => {

const Container = styled.div`
padding: 15px;
`;
  return (
    <Container>
      <Switch>
        <Route exact path="/pizzas" component={Fullpizza} />
        <Route
          path="/pizzas/:pizzaId"
          render={({ match }) => {
            const pizza = Datapizza.find(a => a.id === match.params.pizzaId);
            return <Pizza pizza={pizza} />;
          }}
        />
      </Switch>
    </Container>
  );
};

export default Pizzas;
