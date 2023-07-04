import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Rodape";
import Container from "react-bootstrap/Container";
import Conteudo from "./Conteudo"

export default function Layout() {

  return (
    <>
      <Header/>
      <Container>
        <Conteudo/>
      </Container>
    </>
  );
}
