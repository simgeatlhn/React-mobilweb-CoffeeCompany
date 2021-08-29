import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom" //Router
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Cards from "./pages/Cards"
import Footer from './components/Footer';
import SignIn from './pages/SignIn';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <Router>
           <Navbar /> 
           <Route exact path="/" component={Home}/>
           <Route path="/card" component={Cards} />
           <Route path="/sign" component={SignIn} />
           <Route path="/products" component={Products} />
           <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
