import { Router } from './router';
import './App.scss';
import { CartProvider } from './context/CartContext';
import { Toaster } from 'sonner';
import { FavoritesProvider } from './context/FavoriteContext';

function App() {
  return (
    <>
      <CartProvider>
        <FavoritesProvider>
          <Router />
          <Toaster richColors position="top-right" />
        </FavoritesProvider>
      </CartProvider>
    </>
  );
}

export default App;
