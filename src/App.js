import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Shop from './content/Shop';

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
      name: "Магазин (функциональный компонент)",
      element: <Shop/>
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

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
