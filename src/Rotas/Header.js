import React, { Component } from "react";
import Home from "../Component/Home.js";
import Series from "../Component/Series.js";
import Filmes from "../Component/Filmes.js";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import styled from "styled-components";

const Menu = styled.nav`
  display: flex;
  justify-content: space-evenly;
`;

class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <Menu>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/series">Series</Link>
            </li>
            <li>
              <Link to="/filmes">Filmes</Link>
            </li>
          </Menu>
        </nav>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/filmes" element={<Filmes />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Header;
