import PropTypes from "prop-types";

const LeftBox = ({ addToCart, Products }) => {
  return (
    <div className="left-box p-8 w-1/2 bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-8">Products</h2>
      <ul>
        {Products.map((product) => (
          <li
            key={product.id}
            className="flex items-center justify-between mb-6"
          >
            <div>
              <p className="text-xl font-semibold">{product.name}</p>
              <p className="text-gray-600">${product.price}</p>
            </div>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
              onClick={() => addToCart(product)}
            >
              +
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
LeftBox.propTypes = {
  addToCart: PropTypes.func.isRequired,
  Products: PropTypes.array.isRequired,
};

export default LeftBox;
