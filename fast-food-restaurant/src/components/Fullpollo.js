import React from "react";
import { Link } from "react-router-dom";
import { Datapollo } from './Datapollo';

const Fullpollo = () => {
  return (
    <div>
      <ul>
        {Datapollo.map(pollo => (
          <Link to={`/pollos/${pollo.id}`} key={pollo.id}>
            <div class="container has-text-centered is-$white ">
              <li class={`title ${pollo.name}`} key={pollo.id}>
                {pollo.name}
              </li>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Fullpollo;
