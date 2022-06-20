import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RickAndMorty.css";
import { Rating } from "@mui/material";

const RickAndMorty = () => {
  const API = "https://rickandmortyapi.com/api/character";
  const [data, setData] = useState([]);
  async function getData() {
    let res = await axios(API);
    // console.log(res);
    setData(res.data.results);
  }
  // console.log(data);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h2 className="rick-and-morty">Rick and Morty</h2>
      <div className="list">
        {data.map(item => (
          <div className="card" key={item.id}>
            <h4>{item.name}</h4>
            <img className="img" src={item.image} />
            <br />
            <Rating name="simple-controlled" defaultValue={5} />
            <div className="status">{item.status}</div>
            <div className="status">{item.gender}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RickAndMorty;
