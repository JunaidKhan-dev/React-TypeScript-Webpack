import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import styles from "./cart.module.css";

interface Props {}
interface State {
  isOpen: boolean;
}
class Cart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <div className={styles.cartContainer}>
        <button
          type="button"
          className={styles.button}
          onClick={() =>
            this.setState(({ isOpen }) => {
              return {
                isOpen: !isOpen,
              };
            })
          }
        >
          <FiShoppingCart />
          <span>2 Pizza(s)</span>
        </button>
        <div
          className={styles.cartDropDown}
          style={{ display: this.state.isOpen ? "block" : "none" }}
        >
          <ul>
            <li>Napoletana</li>
            <li>Marina</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Cart;
