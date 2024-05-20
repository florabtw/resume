import styled from "styled-components";

export const Page = styled.div`
  background: white;

  @media (min-width: 960px) {
    aspect-ratio: 0.7727; /* 8.5in / 11in */
    box-shadow:
      0 15px 30px rgba(0, 0, 0, 0.3),
      0 10px 10px rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    font-size: 0.875rem;
    line-height: 1.25;
    overflow: hidden;
    padding: 1rem 2rem 2rem;
    width: 800px;
  }
`;

export const Title = styled.h1`
  color: var(--c-accent);
  font-size: 1.25rem;
  line-height: 1.2;
  margin: 1rem 0 0.5rem 0;
`;
