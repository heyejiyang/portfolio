import React from 'react';
import { Section } from 'react-fullpage';
import styled from 'styled-components';
import Item from './Item';

const Wrapper = styled.div`
  &.first {
    padding-top: 51px;
  }

  display: flex;
  flex-wrap: wrap;

  .item {
    width: 0;
    flex-grow: 1;
    margin: 20px 0;
  }

  .item + .item {
    margin-left: 20px;
  }

  @media all and (max-width: 650px) {
    .item {
      width: 100%;
    }

    .item + .item {
      margin-left: 0;
    }
  }
`;

const Experience = () => {
  return (
    <Section>
      <Wrapper className="layout-width first">
        <Item title="EDUCATION"></Item>
        <Item title="WORK EXPERIENCE"></Item>
      </Wrapper>
      <Wrapper className="layout-width">
        <Item title="CERTIFICATE"></Item>
        <Item title="SKILL"></Item>
      </Wrapper>
    </Section>
  );
};

export default React.memo(Experience);