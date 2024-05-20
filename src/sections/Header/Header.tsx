import styled from "styled-components";

export default function Header() {
  return (
    <Banner>
      <Name>Flora Moon</Name>
      <Text>Remote • Portland, OR</Text>
      <Text>
        <a href="mailto:hello@flora.cool">hello@flora.cool</a> •{" "}
        <a href="https://flora.cool">flora.cool</a>
      </Text>
    </Banner>
  );
}

const Banner = styled.section`
  background: var(--c-accent);
  color: black;
  color: white;

  a {
    color: inherit;
  }

  @media (min-width: 960px) {
    margin: -1rem -2rem 0;
    padding: 2rem;
  }
`;

const Name = styled.h1`
  font-size: 1.75rem;
  font-weight: 900;
  margin: -0.5rem 0 0.5rem;
`;

const Text = styled.p`
  font-size: 0.75rem;
  line-height: 1.5;
  margin: 0;
`;
