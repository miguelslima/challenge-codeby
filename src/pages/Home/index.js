import React from "react";

import { Container, Title } from "./styles";
import Logo from "../../assets/codeby.png";

export function Home() {
  return (
    <Container>
      <img src={Logo} alt="Logo CodeBy" />
      <Title>Home</Title>
    </Container>
  );
}
