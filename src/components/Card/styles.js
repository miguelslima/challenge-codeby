import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
  margin: auto;
`;

export const ContainerMessage = styled.div`
  background-color: #c7ffa6;
  border-radius: 100px;
  padding: 0.7rem 2rem;

  @media (max-width: 1024px) {
    width: 100%;
    margin: 0 1rem;
  }
`;

export const TextMessage = styled.span`
  color: #217a09;
  display: flex;
  justify-content: center;
  font-weight: 600;
`;
