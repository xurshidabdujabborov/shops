import React from "react";
import Braking from "./components/Braking/Braking";
import Center from "./components/Center/Center";
import Main from "./components/Main/Main";
import Product from "./components/Product/Product";
import System from "./components/System/System";
import Video from "./components/Video/Video";
import Step from "./components/Step/Step";
import Headers from "./pages/Headers/Headers";
import Model from "./components/Model/Model";
import Carusel from "./components/Carusel/Carusel";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Headers />
      <Main/>
      <Video/>
      <Product/>
      <Center/>
      <System/>
      <Braking/>
      <Step/>
      <Model/>
      <Carusel/>
      <Footer/>
    </div>
  );
}

export default App;
