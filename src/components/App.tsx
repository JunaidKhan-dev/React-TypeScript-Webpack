import React from "react";
import pizzas from "../data/pizzas.json";
import Pizza from "./Pizza";
import PizzaSVG from "../svg/pizza.svg";

import styles from "./app.module.css";
import Cart from "./Cart";

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <PizzaSVG width={120} height={120} />
        <div className={styles.siteTitle}>Delicious Pizza</div>
        <Cart />
      </div>

      <ul>
        {pizzas.map((pizza) => (
          <Pizza key={pizza.name} pizza={pizza} />
        ))}
      </ul>
    </div>
  );
};

export default App;
