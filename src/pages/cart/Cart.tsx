import { useCart } from "../../context/CartContext"; // Import the useCart hook from the CartContext
import { Link } from "react-router-dom"; // Import the Link component from react-router-dom

export default function Cart() { // Define the Cart component as the default export
  const { cart, increaseQuantity, decreaseQuantity, getTotalAmount } = useCart(); // Destructure cart, increaseQuantity, decreaseQuantity, and getTotalAmount from useCart hook

  return (
    <div className='w-full h-full bg-white rounded-md px-4 py-2 shadow-md'>
      {/* Main container for the cart, with some styling */}
      <h2 className='text-lg font-semibold mb-2'>CartList</h2>
      {/* Cart heading */}
      {cart.length === 0 ? (
        <p className='text-center text-gray-500'>Your cart is empty</p>
      ) : (
        // If the cart is empty, display a message
        <div>
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center gap-4 mt-2 p-2 border-b border-gray-300">
              {/* Map through the cart items and display each item */}
              <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
              {/* Item image */}
              <span className="flex-1 text-sm">{item.title} - ${item.price} x {item.quantity}</span>
              {/* Item title, price, and quantity */}
              <div className="flex gap-2 items-center">
                {/* Quantity controls */}
                <button 
                  onClick={() => increaseQuantity(item.id)}
                  className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  +
                </button>
                {/* Button to increase quantity */}
                <p className="text-lg">{item.quantity}</p>
                {/* Display the quantity */}
                <button 
                  onClick={() => decreaseQuantity(item.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  -
                </button>
                {/* Button to decrease quantity */}
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center w-full mt-4 ">
            {/* Container for the checkout button and total amount */}
              <Link to='/'>
            <button className="w-[200px] h-[40px] bg-black text-white rounded py-2 px-4 hover:bg-blue-600">
                Checkout
            </button>
              </Link>
              {/* Checkout button */}
          
            <h3 className=' text-lg font-semibold'>Total: ${getTotalAmount()}</h3>
            {/* Display the total amount */}
          </div>
        </div>
      )}
    </div>
  )
}
