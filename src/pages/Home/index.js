import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

import {
  Container,
  ContainerCard,
  Title,
  OptionList,
  ItemList,
  ErroBack
} from "./styles";
import Logo from "../../assets/codeby.png";

export function Home() {
  const [dataUnderTen, setDataUnderTen] = useState({});
  const [dataOverTen, setDataOverTen] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [serverIsOff, setServerIsOff] = useState(false);

  useEffect(() => {
    async function fetchLists() {
      try {
        const responseUnder = await fetch("http://localhost:3333/under-ten");
        const dataUnder = await responseUnder.json();

        setDataUnderTen(dataUnder);

        const responseOver = await fetch("http://localhost:3333/over-ten");
        const dataOver = await responseOver.json();

        setDataOverTen(dataOver);

        setIsLoading(false);
      } catch (error) {
        console.log("error => ", error);
        setServerIsOff(true);
      }
    }
    fetchLists();
  }, [isLoading]);

  return (
    <Container>
      <img src={Logo} alt="Logo CodeBy" />
      {serverIsOff ? (
        <>
          <ErroBack>
            Verifique se seu servidor encontra-se ligado seguindo as orientações
            correta!
          </ErroBack>
        </>
      ) : isLoading ? (
        <ReactLoading
          type={"spin"}
          color={"#0090FF"}
          height={"10%"}
          width={"10%"}
        />
      ) : (
        <ContainerCard>
          <Title>Escolha uma das opções abaixo:</Title>
          <OptionList>
            <ItemList>
              <Link to={"/cart"} state={{ data: dataOverTen }}>
                Página de produtos com Frete Grátis
              </Link>
            </ItemList>
            <ItemList>
              <Link to={"/cart"} state={{ data: dataUnderTen }}>
                Página de produtos sem Frete Grátis
              </Link>
            </ItemList>
          </OptionList>
        </ContainerCard>
      )}
    </Container>
  );
}
