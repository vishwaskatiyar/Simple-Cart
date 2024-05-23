import PropTypes from "prop-types";

const RightBox = ({
  cart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
}) => {
  return (
    <div className="right-box w-1/2 p-8 bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-8">Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">No products added to the cart</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between mb-6"
              >
                <div>
                  <p className="text-xl font-semibold">{item.name}</p>
                  <p className="text-gray-600">${item.price}</p>
                  <div className="flex items-center mt-4">
                    <button
                      className="px-3 py-1 bg-red-500 text-white rounded-l-full hover:bg-red-600 transition duration-300 ease-in-out"
                      onClick={() => decrementQuantity(item)}
                    >
                      -
                    </button>
                    <span className="px-6 py-1 bg-gray-200 text-gray-800">
                      {item.quantity}
                    </span>
                    <button
                      className="px-3 py-1 bg-green-500 text-white rounded-r-full hover:bg-green-600 transition duration-300 ease-in-out"
                      onClick={() => incrementQuantity(item)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300 ease-in-out"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <p className="text-xl font-semibold">
              Total Price: $
              {cart.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

RightBox.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  incrementQuantity: PropTypes.func.isRequired,
  decrementQuantity: PropTypes.func.isRequired,
};

export default RightBox;
