import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Story from "./pages/Story/Story";
import Products from "./pages/products/Products";
import Faq from "./pages/faq/Faq";
import Cart from "./pages/cart/Cart";
import Signin from "./pages/sign/Signin";
import Layout from "./layout/Layout"; // 
import Contact from "./pages/Contact/Contact";
import ProductDetails from "./pages/products/ProductDetails"; // Custom component for product details
import Auth0ProviderWithHistory from "./components/auth/Auth0provider";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrap all routes with Layout
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "story",
        element: <Story />
      },
      {
        path: "products",
        element: <Products />
      },
      {
        path: "products/:productId", // Dynamic route
        element: <ProductDetails /> // Custom component for product details

      },
      {
        path: "faq",
        element: <Faq />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path:'contact',
        element:<Contact/>

      },
      {
        path: "sign",
        element: <Signin />
      },
      {
        path: "*",
        element: <h1>Page not found</h1> // 404 page  // 404 page can be a custom component or a route with a different path
      }
    ]
  }
]);

function App() {
  return (
    <>
    <div className="w-full min-h-screen">
    <Auth0ProviderWithHistory>
    
      <RouterProvider router={router} />
  </Auth0ProviderWithHistory>,
    </div>
    </>
  );
}

export default App;
