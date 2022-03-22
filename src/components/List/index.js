import React from "react";

import {
  Container,
  Item,
  ImageContainer,
  DetailsContainer,
  ChocoName,
  OriginalPrice,
  NewPrice,
  ErrorMessage,
} from "./styles";

export function List({ items }) {
  if (!items) {
    return <ErrorMessage>Nenhum item registrado.</ErrorMessage>;
  }

  const itemsFormatted = items?.map(
    ({ id, name, imageUrl, price, sellingPrice }) => (
      <Item key={id}>
        <ImageContainer>
          <img src={imageUrl} alt={name} />
        </ImageContainer>

        <DetailsContainer>
          <ChocoName>{name}</ChocoName>
          <OriginalPrice>R$ {price}</OriginalPrice>
          <NewPrice>R$ {sellingPrice}</NewPrice>
        </DetailsContainer>
      </Item>
    )
  );
  return <Container>{itemsFormatted}</Container>;
}
