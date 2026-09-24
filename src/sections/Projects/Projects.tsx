import styled from "styled-components";

import { Title } from "components/Library";

export default function Projects() {
  return (
    <section>
      <Title>Projects</Title>
      <Project
        title="flora.cool"
        link="https://flora.cool"
        description="A chatbot built to teach myself draggable components using just React, html, and css."
      />
      <Project
        title="scape.fashion"
        link="https://scape.fashion"
        description="A passion project for my favorite video game which required unique wiki parsing challenges."
      />
    </section>
  );
}

interface ProjectProps {
  description: string;
  link?: string;
  title: string;
}

function Project({ description, link, title }: ProjectProps) {
  return (
    <section>
      <Name>
        <a href={link}>{title}</a>
      </Name>{" "}
      – {description}
    </section>
  );
}

const Name = styled.h3`
  display: inline;
  font-weight: normal;
  font-size: 1rem;
`;
