import styled from "styled-components";

import { Title } from "components/Library";

export default function Education() {
  return (
    <section>
      <Title>Education</Title>
      <div>
        <School>University of Missouri</School> •{" "}
        <Degree>B.S., Computer Science</Degree>
      </div>
      <div>
        <Location>Columbia, MO</Location> •{" "}
        <Duration>August, 2012–May, 2015</Duration>
      </div>
    </section>
  );
}

const School = styled.h3`
  display: inline;
`;

const Degree = styled.h4`
  display: inline;
`;

const Location = styled.span``;
const Duration = styled.span``;
