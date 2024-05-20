import styled from "styled-components";

export const Page = styled.div`
  background: white;
  line-height: 1.4;
  padding: 1rem 2rem 2rem;

  @media print, (min-width: 960px) {
    font-size: 0.875rem;
    line-height: 1.25;
  }

  @media print {
    padding: 1rem 2rem;
  }

  @media screen and (min-width: 960px) {
    aspect-ratio: 8.5 / 11; /* US Letter */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    margin: auto;
    min-height: 0; /* force aspect ratio if content overflows */
    padding: 1rem 2rem 2rem;
    position: relative;
    width: 800px;

    &:before,
    &:after {
      background: white;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      content: "";
      height: 100%;
      position: absolute;
      width: 100%;
      z-index: -2;
    }

    &:before {
      left: -5px;
      top: 2px;
      transform: rotate(-1.5deg);
    }

    &:after {
      left: -3px;
      top: 0px;
      transform: rotate(2.4deg);
    }
  }
`;

export const Title = styled.h1`
  color: var(--c-accent);
  font-size: 1.25rem;
  line-height: 1.2;
  margin: 1rem 0 0.5rem 0;
`;

export const Download = styled.a`
  position: absolute;
  right: 2rem;
  top: 2rem;

  @media print {
    display: none;
  }

  @media screen and (min-width: 960px) {
    left: 400px;
    right: auto;
    top: -2.5rem;
    transform: translateX(-50%);
  }
`;
