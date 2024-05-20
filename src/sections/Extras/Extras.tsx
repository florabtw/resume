import styled from "styled-components";

import { Title } from "components/Library";

interface ExtrasProps {
  children: React.ReactNode;
  title: string;
}

export default function Extras({ children, title }: ExtrasProps) {
  return (
    <section>
      <Title>{title}</Title>
      {children}
    </section>
  );
}

interface ExtraProps {
  description: string;
  title: string;
}

export function Extra({ description, title }: ExtraProps) {
  return (
    <Line>
      <strong>{title}</strong> – {description}
    </Line>
  );
}

const Line = styled.p`
  margin: 0;
`;
