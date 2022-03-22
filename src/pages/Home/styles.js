import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-top: 40px;
  }
`;

export const ContainerCard = styled.div`
  margin-top: 25px;

  border: 3px solid #0090ff;
  border-radius: 10px;
`;

export const Title = styled.h1`
  margin: 40px 0;
  padding: 20px;
`;

export const OptionList = styled.ul`
  list-style: none;
  text-align: center;
`;

export const ItemList = styled.li`
  margin: 1rem;
  text-decoration: none;
  font-size: 1rem;

  a {
    text-decoration: none;
    color: #0090ff;

    &:hover {
      opacity: 0.8;
    }
  }
`;
