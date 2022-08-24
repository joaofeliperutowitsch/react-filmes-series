import React, { Component } from "react";
import axios from "axios";
import Series from "./Series";

const FilmesApi = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/movie/popular?api_key=c3bec32ee855194bc6dcc7548e7864a8&language=pt-br&page=1"
});

class Filmes extends Component {
  state = {
    series: []
  };

  componentDidMount() {
    this.getFilmes();
  }

  getFilmes = async () => {
    const resposta = await FilmesApi.get();
    console.log(resposta);

    const allFilmes = resposta.data.results.map((item) => {
      return {
        ...item
      };
    });
  };

  render() {
    return <></>;
  }
}

export default Filmes;
