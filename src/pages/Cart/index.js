import React from "react";
import { useLocation } from "react-router-dom";

import { Button } from "../../components/Button";
import { List } from "../../components/List";
import { Modal } from "../../components/Modal";
import { TotalAmount } from "../../components/TotalAmount";

import { Container, TextMessage, ContainerMessage } from "./styles";

export function Cart() {
  const location = useLocation();
  const data = location?.state?.data;

  if (!data) {
    window.location.assign("/");
  }

  const { items, totalizers } = data;
  const totalOriginalPrice = totalizers && Math.abs(totalizers[0]?.value);
  const totalDiscounts = totalizers && Math.abs(totalizers[1]?.value);

  const totalAmount =
    totalDiscounts && totalOriginalPrice
      ? parseFloat(totalOriginalPrice - totalDiscounts).toFixed(2)
      : 0;

  const showFreeShippingMessage =
    totalAmount && totalAmount > 10 ? (
      <ContainerMessage>
        <TextMessage>Parabéns, sua compra tem frete grátis!</TextMessage>
      </ContainerMessage>
    ) : (
      ""
    );

  return (
    <Container>
      <h3>Meu carrinho</h3>
      <List items={items} />
      <TotalAmount amount={totalAmount} />
      {showFreeShippingMessage}
      <Button text="Finalizar Compra" />
    </Container>
  );
}
