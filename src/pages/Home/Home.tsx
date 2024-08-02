import Design from "./Design";
import Product from "./Product";
import Retailer from "./Retailer";
import Slide from "./Slide";

const Home: React.FC = () => {
 
  return (
    <main className="max-w-full h-full">
     <Slide/>
     <Design/>
     <Retailer/>
     <Product/>
    </main>
  );
};

export default Home;
