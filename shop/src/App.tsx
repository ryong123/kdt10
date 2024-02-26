import './App.css';
import NavComponent from '../components/NavComponent';
import axios from 'axios';
import bgImage from '../public/bg.png'; // 이미지 파일을 import 합니다.
import data from '../src/data';
import { useState } from 'react';
import ShopShoesItem from '../components/ShopShoesItem';

import { Routes, Route } from 'react-router-dom';
import Basket from '../components/Basket';

function App() {
  console.log(data[0].image);
  return (
    <div>
      <NavComponent />
      <img src={bgImage} alt="" className="w-[100%]" />

      <nav>dd</nav>

      <div>
        <Routes>
          <Route path="/"></Route>
          <Route path="/shop" element={<ShopShoesItem data={data} />}></Route>
          <Route path="/basket" element={<Basket />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
