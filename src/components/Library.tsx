import styled from "styled-components";

export const Page = styled.div`
  background: white;

  @media (min-width: 960px) {
    aspect-ratio: 0.7727; /* 8.5in / 11in */
    margin: 0 auto;
    overflow: hidden;
    padding: 1rem 2rem;
    width: 800px;
  }
`;

export const Title = styled.h1`
  color: salmon;
  font-size: 1.5rem;
  margin: 1rem 0 0.5rem 0;
`;
