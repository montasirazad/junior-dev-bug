import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import TopHeader from './Components/TopHeader';
import Routing from './Features/Routing';
import { Route, Routes } from 'react-router-dom';
import Checkout from './Features/Checkout/Components/Checkout';

function App() {
  return (
    <>
      <div className="">
        <div className="container ml-auto mr-auto">
          <TopHeader />
        </div>

        <div className="">
          <Header />

        </div>
        <Routes>
          <Route path='/' element={<Checkout />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
