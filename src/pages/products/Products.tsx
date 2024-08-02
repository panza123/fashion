import { products } from "./index";
import { Link } from "react-router-dom";

function Products() {
  return (
    <section className="w-full h-full">
      <div className="w-full h-[300px] bg-blue-200">
        <h4 className="text-xl md:text-3xl lg:text-5xl font-bold pt-4 px-6">
          <span className="text-orange-600">Choose your <br/></span>favorite stuffs
        </h4>
      </div>

      <h3 className="pt-4 px-6 sm:text-xl md:text-2xl lg:text-4xl">Products</h3>
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-3 px-6 mt-3">
        {products.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              {/* Product image */}
              <img className="w-full h-48 object-cover" src={product.image} alt={product.title} />
              <div className="p-4">
                {/* Product title */}
                <h4 className="text-xl font-semibold">{product.title}</h4>
                {/* Product price */}
                <p className="text-gray-600">${product.price}</p>
                {/* Product description */}
                <p className="text-gray-500 mt-2">{product.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Products;
