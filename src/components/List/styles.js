import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.4rem 0.8rem;
  max-height: 50vh;
  overflow-y: auto;
  border-bottom: 2px solid #cacaca;
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 11fr;
  margin: 0.5rem;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100px;
  height: 100px;
  border: 1px solid #d2d2d2;

  & img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const DetailsContainer = styled.div`
  margin-left: 1rem;
`;

export const ChocoName = styled.span`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-transform: capitalize;
`;

export const OriginalPrice = styled.div`
  font-size: 0.8rem;
  color: #b0afae;
`;

export const NewPrice = styled.div`
  color: #202020;
`;

export const ErrorMessage = styled(Container)`
  text-align: center;
  color: #ff647c;
  margin: 1rem 0;
  font-size: 1rem;
  padding-bottom: 1.5rem;
`;
