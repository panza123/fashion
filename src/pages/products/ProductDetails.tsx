import { useState } from 'react';
import { useParams } from "react-router-dom";
import { products } from "./index"; // Assuming products is an array of product objects
import { BsCart2 } from "react-icons/bs";
import { useCart } from '../../context/CartContext'; // Adjust the path if needed
import { Link } from "react-router-dom";

// Assuming you have a file for types like types.ts or models.ts
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
  name: string;
}

function ProductDetails() {
  const { productId } = useParams<{ productId?: string }>(); // Allow productId to be optional
  const id = productId ? parseInt(productId, 10) : null; // Ensure id is a number or null

  const product = id !== null ? products.find((product) => product.id === id) : undefined;

  const { addToCart } = useCart(); // Destructure addToCart from the context

  const [showPopup, setShowPopup] = useState(false);
  const handleAddToCart = () => {
    if (product) {
      // Add 'name' property with value of 'title'
      const cartItem: CartItem = {
        ...product,
        quantity: 1,
        name: product.title, // Ensure this aligns with the 'name' property
      };
      addToCart(cartItem);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className="w-full h-full px-6 py-4">
      <div className="w-full h-[300px] bg-blue-200 flex items-center justify-center">
        <h4 className="text-xl md:text-3xl lg:text-5xl font-bold text-center">
          <span className="text-orange-600">We provide</span> you Fashionable Stuffs
        </h4>
      </div>
      <div className="w-full mt-6 flex flex-col lg:flex-row gap-4">
        <img className="w-full lg:w-1/2 h-64 object-cover" src={product.image} alt={product.title} />
        <div className="p-4 flex-1">
          <div className="flex flex-col md:flex-row gap-4">
            <h4 className="text-xl md:text-2xl font-bold">{product.title}</h4>
            <p className="text-gray-600">${product.price}</p>
          </div>
          <p className="text-gray-500 mt-2">{product.description}</p>
          <div className="mt-2 w-full md:w-[350px]">
            <p className="font-bold text-sm md:text-lg lg:text-xl">Description</p>
            <p className="text-gray-500 mt-2">
              Over three years in business, we've had the chance to work on a variety of projects with companies.
            </p>
          </div>
          <button
            className="w-full md:w-[200px] h-[50px] bg-black flex gap-2 text-white 
            items-center justify-center mt-4 rounded-md hover:bg-black/80"
            onClick={handleAddToCart} // Use the handler function
          >
            Add to Cart
            <BsCart2 size={30} />
          </button>
          {showPopup && (
            <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-md">
              Added to Cart
            </div>
          )}
        </div>
      </div>
        <Link to='/products'>
      <button className="mt-4 text-blue-500 hover:underline">
          Back to product page
      </button>
        </Link>
    </section>
  );
}

export default ProductDetails;
