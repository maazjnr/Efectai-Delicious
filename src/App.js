import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Pages from "./page/Pages";
import Searched from "./page/Searched";

function App() {


  return (


    <div className="App">
    <BrowserRouter>
     <Pages />
     <Routes>
      <Route path="/searched/:searched" element={<Searched />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
