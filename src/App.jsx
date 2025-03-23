import { CartProvider } from "./context/CartContext";
import { ThemeProvider } from "./context/ThemeContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import ThemeButton from "./components/ThemeButton";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Intro from "./components/Intro";

const App = () => {

  return (
    <ThemeProvider>
      <CartProvider>
        <div className="bg-white dark:bg-gray-900">
          <Header />
          <Intro />
          <ProductList />
          <Cart />
          <Footer />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;

