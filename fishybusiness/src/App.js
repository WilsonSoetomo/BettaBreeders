import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/products" component={ProductList} />
        <Route path="/cart" component={ShoppingCart} />
        <Route path="/checkout" component={Checkout} />
        {/* Additional routes can be added here */}
        {/* <Route path="/some-other-route" component={SomeOtherComponent} /> */}
        {/* <Route path="/another-route" component={AnotherComponent} /> */}
        {/* ... */}
        <Route render={() => <h1>404 Not Found</h1>} />
        {/* A fallback route to handle unknown paths */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
