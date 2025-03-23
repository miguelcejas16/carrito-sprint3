import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="w-full max-w-xs p-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="w-full h-48 object-cover rounded-t-lg"
          src={product.image}
          alt={product.name}
        />
      </a>
      <div className="p-4 text-center">
        <h5 className="text-xl font-bold text-gray-900 dark:text-white">{product.name}</h5>
        <p className="text-lg font-semibold text-green-600 dark:text-green-400 mt-2">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          type="button"
          className="mt-4 w-full px-5 py-2 text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-700"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Product;

