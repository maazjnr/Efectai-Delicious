import React from "react";
import { BrowserRouter } from "react-router-dom";
import Pages from "./page/Pages";
import Footer from "./page/Footer";


function App() {


  return (


    <div className="App">
    <BrowserRouter>
     <Pages />
     </BrowserRouter>
    </div>
  );
}

export default App;
