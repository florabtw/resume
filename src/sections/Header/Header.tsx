import styled from "styled-components";

import { Title } from "components/Library";

export default function Header() {
  return (
    <Section>
      <Box>
        <Title>Hello, I'm</Title>
        <Name>Flora Moon</Name>
      </Box>
      <Box>
        <Text>Remote • Portland, OR</Text>
        <Text>
          <a href="mailto:hello@flora.cool">hello@flora.cool</a> •{" "}
          <a href="https://flora.cool">flora.cool</a>
        </Text>
      </Box>
    </Section>
  );
}

const Section = styled.section`
  align-items: end;
  border-bottom: 2px solid var(--c-accent);
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.5rem;
`;

const Box = styled.div`
`;

const Name = styled.h1`
  font-size: 1.5rem;
  margin: -0.5rem 0 0;
`;

const Text = styled.p`
  font-size: 0.75rem;
  line-height: 1.5;
  margin: 0;
`;
