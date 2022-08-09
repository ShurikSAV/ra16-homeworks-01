import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Shop from './content/Shop';
import ShopClass from './content/ShopСlass'
import Calendar from './components/Calendar';
import Portfolio from './content/Portfolio'
import { useState } from 'react';
import LocationOfGoods from './content/LocationOfGoods'

const ShopItem = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

const now = new Date();

function App() {
  const [lessonNumber, setLessonNumber] = useState(2)
  
  const menu = [
    {
      path: "/",
      name: "Домой",
      lessonNumber: 0,
      element: (
        <>
          <p>Выберите задание в меню выше</p>
          {[1,2].map( 
            (i) => 
              <button key={i}
                onClick={() => setLessonNumber(i)} 
                className={lessonNumber === i ? "activButton" : ""}>
                Урок {i}
              </button>
            )}
        </>
      )
    },
    {
      path: "/Shop",
      name: "Магазин (function)",
      lessonNumber: 1,
      element: <Shop item={ShopItem}/>
    },
    {
      path: "/ShopClass",
      name: "Магазина (class)",
      lessonNumber: 1,
      element: <ShopClass item={ShopItem}/>
    },
    {
      path: "/Calendar",
      name: "Календарь",
      lessonNumber: 1,
      element: 
        <>
          <Calendar dateNow={now}/>
          <Calendar dateNow={new Date(2017, 2, 8)}/>
        </>
    },
    {
      path: "/Portfolio",
      name: "Портфолио с фильтрами",
      lessonNumber: 2,
      element: <Portfolio />
    },
    {
      path: "/LocationOfGoods",
      name: "Расположение товаров",
      lessonNumber: 2,
      element: <LocationOfGoods />
    }
  ]
  

  return (
    <div className='App'>
      <Header menu={menu}  lessonNumber={lessonNumber}/>
      <div className='Content'>
        <Routes>
          {menu.map(
            (item,index) => <Route key={index} {...item}></Route>
            )}
        </Routes>
      </div>
    </div>
  );
}

export default App