// Header.jsx

import { useReducer } from "react";
import LeftBox from "../Component/LeftBox";
import RightBox from "../Component/RightBox";

const Products = [
  { id: 1, name: "Product-1", price: 100 },
  { id: 2, name: "Product-2", price: 200 },
  { id: 3, name: "Product-3", price: 300 },
  { id: 4, name: "Product-4", price: 400 },
];

const initialState = {
  cart: [],
};

const reducer = (state, action) => {
  let updatedCart, existingItemIndex, updatedQuantity;
  switch (action.type) {
    case "ADD_TO_CART":
      existingItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex !== -1) {
        updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity += 1;
        return { ...state, cart: updatedCart };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "INCREMENT_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "DECREMENT_QUANTITY":
      return {
        ...state,
        cart: state.cart
          .map((item) => {
            if (item.id === action.payload.id) {
              updatedQuantity = Math.max(0, item.quantity - 1);
              return { ...item, quantity: updatedQuantity };
            } else {
              return item;
            }
          })
          .filter((item) => item.quantity > 0),
      };
    default:
      return state;
  }
};

const Header = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  const incrementQuantity = (product) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: product });
  };

  const decrementQuantity = (product) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: product });
  };

  return (
    <div className="shopping-cart flex justify-center">
      <LeftBox addToCart={addToCart} Products={Products} />
      <RightBox
        cart={state.cart}
        removeFromCart={removeFromCart}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
      />
    </div>
  );
};

export default Header;
