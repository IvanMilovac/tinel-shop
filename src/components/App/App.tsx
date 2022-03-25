import { useState, createContext } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { WorkshopsListing, WorkshopDetails } from "../Layouts";
import { Cart, Footer, Header } from "../Elements";
import { Backdrop } from "../Commons";

import "./App.scss";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: true,
      retry: 2,
    },
  },
});

type WorkshopContextType = {
  openCart: boolean;
  toggleCart: () => void;
  checkout: boolean;
  setCheckout: React.Dispatch<React.SetStateAction<boolean>>;
};

export const WorkshopContext = createContext<WorkshopContextType>(
  {} as WorkshopContextType
);

const App = () => {
  const [openCart, setOpenCart] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const toggleCart = () => setOpenCart((prev) => !prev);

  return (
    <QueryClientProvider client={queryClient}>
      <WorkshopContext.Provider
        value={{ openCart, toggleCart, checkout, setCheckout }}
      >
        <Router>
          <div className="App">
            <Backdrop show={openCart} handleClick={toggleCart} alpha={0.05} />
            <Cart />
            <Header toggleCart={toggleCart} />
            <Routes>
              <Route path="/" element={<WorkshopsListing />} />
              <Route path="/:id" element={<WorkshopDetails />} />
            </Routes>

            <Footer />
          </div>
        </Router>
      </WorkshopContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
