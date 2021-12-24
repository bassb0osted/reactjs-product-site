import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Home from "./pages/home/home";
import Cart from "./pages/cart/cart";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path = '/' element={<Home />}/>
          <Route path = '/cart' element={<Cart />}/>
          <Route path="*" element={<Navigate to ="/" />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
