import styled from "styled-components";

import Section from "../../components/Section";
import { Grid, GridItem } from "../../components/Grid";

const Skills = () => (
  <Section title="Skills">
    <Grid>
      <GridItem>
        <SkillsList>
          <Skill>React / Redux</Skill>
          <Skill>Typescript / JavaScript</Skill>
          <Skill>Node / Express</Skill>
        </SkillsList>
      </GridItem>
      <GridItem>
        <SkillsList>
          <Skill>Webpack / Babel</Skill>
          <Skill>Sentry / Datadog</Skill>
          <Skill>Git / Bash / CLI</Skill>
        </SkillsList>
      </GridItem>
      <GridItem>
        <SkillsList>
          <Skill>Python / Django</Skill>
          <Skill>Ruby / Rails</Skill>
          <Skill>Java / Scala</Skill>
        </SkillsList>
      </GridItem>
    </Grid>
  </Section>
);

const SkillsList = styled.ul`
  list-style-position: inside;
  margin: 0;
  padding: 0;

  @media (min-width: 960px), print {
    list-style: none;
    font-size: 0.75rem;
  }
`;

const Skill = styled.li`
  @media (min-width: 960px), print {
    margin-bottom: 0.25rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export default Skills;
