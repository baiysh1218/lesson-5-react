import { Backdrop, CircularProgress, Paper } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Pocemon.css";

const Pokemons2 = () => {
  const API = "https://pokeapi.co/api/v2/pokemon/";
  const [data, setData] = useState(null);
  async function getPokemons() {
    let res = await axios(API);
    // console.log(res);
    setData(res.data.results);
  }

  // console.log(data);

  useEffect(() => {
    setTimeout(getPokemons, 1000);
    // getPokemons();
  }, []);
  return (
    <div>
      <h2 className="Pokemons">Pokemons</h2>
      {data ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}>
          {data.map(pokemon => (
            <Paper
              style={{
                margin: "10px",
                padding: "15px",
                backgroundColor: "black",
                color: "white",
                border: "3px solid red",
                borderRadius: "20px",
              }}
              elevation={24}
              key={pokemon.url}>
              {pokemon.name}{" "}
            </Paper>
          ))}
        </div>
      ) : (
        <Backdrop
          sx={{ color: "#fff", zIndex: theme => theme.zIndex.drawer + 1 }}
          open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </div>
  );
};

export default Pokemons2;
