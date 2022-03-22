import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  background: #fff;

  border-radius: 10px;

  width: 45vw;
  margin: auto;
  margin-top: 45px;

  h3 {
    font-size: 1.3rem;
    text-align: center;
    padding: 0.8rem 0;
    border-bottom: 2px solid #cacaca;
    width: 100%;
    margin-top: 0.3rem;
  }

  @media (max-width: 1024px) {
    width: 100%;
    margin: 0 2rem;
  }
`;

export const ContainerMessage = styled.div`
  background-color: #c7ffa6;
  border-radius: 100px;
  padding: 0.7rem 2rem;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    width: 100%;
    margin: 0 1rem;
  }
`;

export const TextMessage = styled.span`
  color: #217a09;
  display: flex;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 600;
`;
