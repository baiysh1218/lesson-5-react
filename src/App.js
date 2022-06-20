import React from "react";
import Header from "./components/Header/Header";
import Pokemons from "./components/Pokemons/Pokemons";
import Pokemons2 from "./components/Pokemons2/Pokemons2";
import RickAndMorty from "./components/RickAndMorty/RickAndMorty";
import Users from "./components/Users/Users";
import AddProduct from "./components/AddProduct/AddProduct";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    // указываем что роутинг будет в браузере
    <BrowserRouter>
      {/* Header будет на всез наших страничках */}
      <Header />
      {/* для преречисление роутеров */}
      <Routes>
        {/* непосредственно сами роуты */}
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons2" element={<Pokemons2 />} />
        <Route path="/RickAndMorty" element={<RickAndMorty />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Add" element={<AddProduct />} />
      </Routes>
      {/* Footer будет на всех страничках */}
      <h1>Это Footer</h1>
    </BrowserRouter>
  );
};

export default App;
