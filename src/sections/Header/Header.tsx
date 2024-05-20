import styled from "styled-components";

import { Title } from "components/Library";

export default function Header() {
  return (
    <>
      <Title>Hello, I'm</Title>
      <Name>Flora Moon</Name>
      <Text>Remote • Portland, OR</Text>
      <Text>
        <a href="mailto:hello@flora.cool">hello@flora.cool</a> •{" "}
        <a href="https://flora.cool">flora.cool</a>
      </Text>
    </>
  );
}

const Name = styled.h1`
  font-size: 1.75rem;
  margin: 0 0 0.5rem;
`;

const Text = styled.p`
  margin: 0;
  line-height: 1.5;
  font-size: 0.75rem;
`;
