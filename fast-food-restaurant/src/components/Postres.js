import React from "react";
import { Switch, Route } from "react-router-dom";
import {Datapostres} from './Datapostres';
import Postre from "./Postre";
import Fullpostres from './Fullpostres';
import styled from 'styled-components';

const Postres = () => {
  
const Container = styled.div`
padding: 15px;
`;
  return (
    <Container>
      <Switch>
        <Route exact path="/postres" component={Fullpostres} />
        <Route
          path="/postres/:postreId"
          render={({ match }) => {
            const postre = Datapostres.find(a => a.id === match.params.postreId);
            return <Postre postre={postre} />;
          }}
        />
      </Switch>
    </Container>
  );
};

export default Postres;
