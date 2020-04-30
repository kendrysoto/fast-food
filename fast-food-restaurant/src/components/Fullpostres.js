import React from "react";
import { Link } from "react-router-dom";
import { Datapostres } from './Datapostres';

const Fullpostres = () => {
  return (
    <div>
      <ul>
        {Datapostres.map(postre => (
          <Link to={`/postres/${postre.id}`} key={postre.id}>
            <div class="container has-text-centered is-$white ">
              <li class={`title ${postre.name}`} key={postre.id}>
                {postre.name}
              </li>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Fullpostres;
