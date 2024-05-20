import Education from "sections/Education/Education";
import Experience, { Role } from "sections/Experience/Experience";
import Extras, { Extra } from "sections/Extras/Extras";
import Header from "sections/Header/Header";
import Projects from "sections/Projects/Projects";
import { Page } from "components/Library";
import styled from "styled-components";

const Download = styled.a`
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

export default function Generic() {
  return (
    <Page>
      <Download
        download="FloraMoon-SWE-Resume.pdf"
        href="/FloraMoon-SWE-Resume.pdf"
      >
        Download
      </Download>
      <Header />
      <Experience>
        <Role
          title="Senior Software Engineer"
          company="HubSpot"
          location="Remote"
          start={new Date("2022-01-10")}
          end={new Date("2023-10-13")}
        >
          <li>
            Led the effort to refactor over 10k lines of code from Javascript to
            Typescript.
          </li>
          <li>
            Developed a generic component library using React to enable quickly
            creating a new marketplace.
          </li>
          <li>
            Collaborated with Product and Design to redesign the marketplace for
            a mobile-friendly experience.
          </li>
        </Role>
        <Role
          title="Senior Software Engineer"
          company="Evernote"
          location="Remote"
          start={new Date("2020-04-30")}
          end={new Date("2021-03-31")}
        >
          <li>
            Rebuilt the editor using ProseMirror to create a single
            cross-platform editor for mobile, desktop, and web.
          </li>
          <li>
            Integrated Google Drive into the editor to embed Google Docs,
            Sheets, Slides, and Forms.
          </li>
        </Role>
        <Role
          title="Founder & Solo Engineer"
          company="Hearling"
          location="Remote"
          start={new Date("2019-12-31")}
          end="Present"
        >
          <li>
            Built a SaaS from scratch,{" "}
            <a href="https://hearling.com">hearling.com</a>, using Postgres,
            Node, Express, React, and Stripe – serving over 3k free and 100 paid
            subscribers.
          </li>
          <li>
            Released an ad-supported text-to-speech website,{" "}
            <a href="https://soundoftext.com">soundoftext.com</a>, using Mongo,
            Express, and React – serving 500k users per month.
          </li>
        </Role>
        <Role
          title="Software Engineer"
          company="Redbubble"
          location="San Francisco, CA"
          start={new Date("2018-09-30")}
          end={new Date("2019-07-31")}
        >
          <li>
            Migrated product pages from a Ruby on Rails app to an Express and
            React microservice.
          </li>
        </Role>
        <Role
          title="Software Engineer"
          company="Leapfin"
          location="Remote"
          start={new Date("2018-02-28")}
          end={new Date("2018-07-31")}
        >
          <li>
            Hired two new engineers to grow the engineering team to 5 people.
          </li>
        </Role>
        <Role
          title="Software Engineer"
          company="Asynchrony Labs"
          location="Saint Louis, MO"
          start={new Date("2015-08-30")}
          end={new Date("2017-02-28")}
        >
          <li>
            Developed an ETL pipeline in Scala, Play, Neo4J and Apache Kafka.
          </li>
        </Role>
      </Experience>
      <Education />
      <Projects />
      <Extras title="Skills & Interests">
        <Extra
          title="Skills"
          description="Typescript, Javascript, React, Node,
          Express, Python, SQL, Docker, Java, Scala, Kafka, Git, Bash, CLI,
          Ruby, Rails, AWS"
        />
        <Extra
          title="Interests"
          description="D&D, gaming, coffee, yoga, reading,
          sustainability, ASL, queer rights, neurodivergence"
        />
      </Extras>
    </Page>
  );
}
