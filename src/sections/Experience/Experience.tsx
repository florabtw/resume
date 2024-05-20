import styled from "styled-components";

import { Title } from "components/Library";

export default function Experience({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Title>Experience</Title>
      {children}
    </section>
  );
}

const dateFormat = new Intl.DateTimeFormat("en", {
  year: "numeric",
  month: "long",
});

function formatDate(date: Date | string) {
  if (!(date instanceof Date)) return date;

  const [month, _space, year] = dateFormat
    .formatToParts(date)
    .map((p) => p.value);

  return `${month}, ${year}`;
}

interface RoleProps {
  children?: React.ReactNode;
  company: string;
  end: Date | string;
  location: string;
  start: Date;
  title: string;
}

export function Role({
  children,
  company,
  end,
  location,
  start,
  title,
}: RoleProps) {
  return (
    <section>
      <div>
        <Company>{company}</Company> • <RoleTitle>{title}</RoleTitle>
      </div>
      <div>
        <Location>{location}</Location> •{" "}
        <Duration>
          {formatDate(start)} – {formatDate(end)}
        </Duration>
      </div>
      <Duties>{children}</Duties>
    </section>
  );
}

const Company = styled.h3`
  display: inline;
  font-size: 1rem;
`;

const RoleTitle = styled.h4`
  display: inline;
  font-size: 1rem;
`;

const Location = styled.span``;

const Duration = styled.span``;

const Duties = styled.ul`
  margin: 0.5rem 0;
  padding: 0 1rem;
`;
