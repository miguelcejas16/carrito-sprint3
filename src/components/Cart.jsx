import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useContext(CartContext);

  if (!isOpen) return null;

  return (
    <section className="relative container mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      {/* Botón de Cierre */}
      <button
        className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl"
        onClick={onClose}
      >
        ✖
      </button>
      <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">El carrito está vacío</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 border">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3">Producto</th>
                <th scope="col" className="px-6 py-3">Precio</th>
                <th scope="col" className="px-6 py-3">Cantidad</th>
                <th scope="col" className="px-6 py-3">Total</th>
                <th scope="col" className="px-6 py-3">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="bg-white border-b">
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">${item.price}</td>
                  <td className="px-6 py-4 flex items-center gap-2">
                    <button
                      className="px-2 py-1 bg-gray-300 rounded"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-300 rounded"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </td>
                  <td className="px-6 py-4">${item.price * item.quantity}</td>
                  <td className="px-6 py-4">
                    <button
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <h3 className="text-xl font-semibold mt-4">Total: ${totalPrice}</h3>
    </section>
  )
};

export default Cart;
