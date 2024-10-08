import NavBar from "./components/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "./components/types";
import Home from "./components/Home";
import FoodScroll from "./components/foodscroll";
import Hotels from "./components/hotels";
import RestaurantDetail from "./components/RestaurantDetails";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RestaurantsPage from "./components/RestaurantsPage";
import SearchPage from "./components/nav/Search";
import OffersPage from "./components/nav/offers";
import HelpPage from "./components/nav/help";
import SignInPage from "./components/nav/signin";
import Cart from "./components/nav/cart";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <div className="app bg-white-20">
        <NavBar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Home setSelectedPage={setSelectedPage} />
                <FoodScroll />
                <Hotels />
              </>
            } 
          />
          <Route path="/restaurant/:name" element={<RestaurantDetail />} />
          <Route path="/restaurants" element={<RestaurantsPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
