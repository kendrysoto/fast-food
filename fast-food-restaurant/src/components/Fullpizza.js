import React from "react";
import { Link } from "react-router-dom";
import {Datapizza} from './Datapizza';

const Fullpizza = () => {
    return (
      <div>
        <ul>
          {Datapizza.map(pizza => (
            <Link to={`/pizzas/${pizza.id}`} key={pizza.id}>
              <div class="container has-text-centered is-$white ">
              <li class={`title ${pizza.name}`} key={pizza.id}>
                {pizza.name}
              </li>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Fullpizza;
  