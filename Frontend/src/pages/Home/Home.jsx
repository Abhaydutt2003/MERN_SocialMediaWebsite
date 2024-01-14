import { Container } from "@mui/material";

import "./style.css";

import { NavBar } from "../../components2";

import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <Container maxWidth="lg">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </Container>
  );
};

export default Home;
