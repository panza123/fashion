import retailer from "../../assets/images/pexels-shattha-pilabut-38930-135620.jpg";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
function Retailer() {
  return (
    <section className="w-full h-full mt-10 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <img
          src={retailer}
          alt="Retail image"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="w-full md:w-1/2 bg-blue-200 p-4 ">
        <h3 className="text-xl md:text-3xl lg:text-4xl font-bold pt-4">
          <span className="text-orange-600">Retail</span> shop owners
        </h3>
        <p className="sm:text-sm md:text-lg text-gray-500 pt-2">
          Running a retail business is not just about selling products; it's
          about creating an experience that customers remember. Every
          interaction, every detail, and every moment spent in your store
          contributes to a story that customers will share. Your job is to make
          that story one of delight and satisfaction. By investing in
          exceptional customer service, thoughtful merchandising, and a
          welcoming atmosphere, you build relationships that turn first-time
          shoppers into loyal patrons. In the world of retail, your success is
          measured not just by the volume of sales but by the quality of
          connections you make and the positive impact you leave on your
          community."
        </p>

        <Link to='products'>
        <button className="text-gray-800 flex items-center gap-3 hover:text-orange-600 mt-4">Expolre Products <FaArrowRightLong /> </button>
        </Link>
      </div>
    </section>
  );
}

export default Retailer;
