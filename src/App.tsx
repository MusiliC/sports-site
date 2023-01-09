import React, { useEffect, useState } from "react";
import Navigation from "./components/naigation/Navigation";
import { SelectedPage } from "./components/shared/types";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Products from "./components/products/Products";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

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
    <div className="app bg-gray-50">
      <Navigation
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Services setSelectedPage={setSelectedPage} />
      <Products setSelectedPage = {setSelectedPage} />
      <Contact setSelectedPage = {setSelectedPage}/>
      <Footer/>
    </div>
  );
}

export default App;
