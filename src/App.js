import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Shop from './content/Shop';
import ShopClass from './content/ShopСlass'
import Calendar from './components/Calendar';

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
  const menu = [
    {
      path: "/",
      name: "Домой",
      element: (
        <p>Выберите задание в меню выше</p>
      )
    },
    {
      path: "/Shop",
      name: "Магазин (function)",
      element: <Shop item={ShopItem}/>
    },
    {
      path: "/ShopClass",
      name: "Магазина (class)",
      element: <ShopClass item={ShopItem}/>
    },
    {
      path: "/calendar",
      name: "Календарь",
      element: 
        <>
          <Calendar dateNow={now}/>
          <Calendar dateNow={new Date(2017, 2, 8)}/>
        </>
    }
  ]

  return (
    <div>
      <Header menu={menu} />
      <div className="App">
        <Routes>
          {/* <Route path="/Shop" element={<Shop/>}></Route> */}
          {menu.map(
            (item,index) => <Route key={index} {...item}></Route>
          )}
        </Routes>
      </div>
    </div>
  );
}

export default App