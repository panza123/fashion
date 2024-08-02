import { Link } from "react-router-dom";
import { product } from "./index";

function Product() {
  return (
    <section className="mt-4 w-full h-full px-4">
      {/* Title for the featured products section */}
      <h3 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold pt-3">
        Featured Products
      </h3>

      {/* Grid container for product cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {product.map((item, index) => (
          // Link to the individual product page, using item's id for routing
          <Link to={`products/`} key={index} className="block">
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              {/* Product image */}
              <img
                className="w-full h-48 object-cover"
                src={item.image}
                alt={item.title}
              />
              <div className="p-4">
                {/* Product title */}
                <h4 className="text-xl font-semibold">{item.title}</h4>
                {/* Product price */}
                <p className="text-gray-600">${item.price}</p>
                {/* Product description */}
                <p className="text-gray-500 mt-2">{item.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Product;
