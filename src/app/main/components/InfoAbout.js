import React from 'react';
import { Section } from 'react-fullpage';
import ProfileImage from './ProfileImage';
import styled from 'styled-components';
import Item from './Item';

const Wrapper = styled.div`
  padding-top: 51px;
  .inner {
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
  }
`;

const InfoAbout = () => {
  return (
    <Section>
      <Wrapper>
        <ProfileImage />
        <div className="layout-width inner">
          <Item title="INFO"></Item>
          <Item title="ABOUT"></Item>
        </div>
      </Wrapper>
    </Section>
  );
};

export default React.memo(InfoAbout);