import React from 'react'
import Btns from './btns'
import Header from './components/header/index'
import Hero from './components/Hero/constHero/const'
import Future from './components/Hero/future/index'
import Effortless from './components/Hero/effortless/index'
import ProductManager from './components/Hero/productManager/index'
import Marceters from './components/Hero/marketers/index'
import Reviews from './components/reviews/inndex'
import './global.scss'



function App() {

  return (
    <div className="App">
      <div className="container">
          <Header ></Header>
          <Hero />
          <Future />
          <Effortless />
          <ProductManager/>
          <Marceters />
          <Reviews />
        </div>
    </div>
  );
}

export default App;
