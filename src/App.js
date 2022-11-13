import { useEffect } from "react";
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const cartIsShown = useSelector((state) => state.ui.cartIsShown);
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    fetch(process.env.REACT_APP_FIREBASE,{
      method:"PUT",
      body: JSON.stringify(cart),
    });
  }, [cart]);
  return (
    <Layout>
      {cartIsShown && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
