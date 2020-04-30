import React from "react";
import styled from 'styled-components';

const Home = () => {
  const Container = styled.div`
  padding: 15px;
`;
const Img = styled.img`
float: right;
margin: 0px 0px 15px 15px;
width="100"
`;
  return (
    <div class="container" >
      <div >
      <h1 class="has-text-danger has-text-centered is-size-1" > Bienvenidos a Comidas Rapidas Acamica</h1>
        <figure  class="image is-3by1">
        <img  src="../imagespizza/fondo2.jpg" />
        </figure>
      </div>
      </div>
  );
};

export default Home;