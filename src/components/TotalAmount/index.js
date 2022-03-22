import React from "react";
import { Container } from "./styles";

export function TotalAmount({ amount }) {
  return (
    <Container>
      <span>Total</span>
      <span>R$ {amount}</span>
    </Container>
  );
}
