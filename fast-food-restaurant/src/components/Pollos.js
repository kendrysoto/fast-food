import React from "react";
import { Switch, Route } from "react-router-dom";
import { Datapollo } from './Datapollo';
import Pollo from "./Pollo";
import Fullpollo from "./Fullpollo";
import styled from 'styled-components';

const Pollos = () => {
  const Container = styled.div`
  padding: 15px;
`;
  return (
    <Container>
      <Switch>
        <Route exact path="/pollos" component={Fullpollo} />
        <Route
          path="/pollos/:polloId"
          render={({ match }) => {
            const pollo = Datapollo.find(a => a.id === match.params.polloId);
            return <Pollo pollo={pollo} />;
          }}
        />
      </Switch>
    </Container>
  );
};

export default Pollos;
