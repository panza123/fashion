
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, getTotalAmount } = useCart();
  const { isAuthenticated } = useAuth0(); // Destructure isAuthenticated from useAuth0

  if (!isAuthenticated) {
    return <p className='text-center text-gray-500'>Please log in to view your cart</p>;
  }

  return (
    <div className='w-full h-full bg-white rounded-md px-4 py-2 shadow-md'>
      <h2 className='text-lg font-semibold mb-2'>CartList</h2>
      {cart.length === 0 ? (
        <p className='text-center text-gray-500'>Your cart is empty</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center gap-4 mt-2 p-2 border-b border-gray-300">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
              <span className="flex-1 text-sm">{item.title} - ${item.price} x {item.quantity}</span>
              <div className="flex gap-2 items-center">
                <button 
                  onClick={() => increaseQuantity(item.id)}
                  className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  +
                </button>
                <p className="text-lg">{item.quantity}</p>
                <button 
                  onClick={() => decreaseQuantity(item.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  -
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center w-full mt-4">
            <Link to='/'>
              <button className="w-[200px] h-[40px] bg-black text-white rounded py-2 px-4 hover:bg-blue-600">
                Checkout
              </button>
            </Link>
            <h3 className='text-lg font-semibold'>Total: ${getTotalAmount()}</h3>
          </div>
        </div>
      )}
    </div>
  );
}
