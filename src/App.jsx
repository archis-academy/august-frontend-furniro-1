import { Router } from './router';
import './App.scss';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <>
      <CartProvider>
        <Router />
      </CartProvider>
    </>
  );
}

export default App;
