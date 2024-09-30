import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .item-title {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0;
    margin: 0 0 25px;

    .tit {
      font-size: 1.4rem;
      margin-right: 10px;
      width: auto;
    }

    .bar {
      flex-grow: 1;
      height: 2px;
      background: #bcbcbc;
    }
  }
`;

const Item = ({ children, title }) => {
  return (
    <Wrapper className="item">
      <div className="item-title">
        <div className="tit">{title}</div>
        <div className="bar"></div>
      </div>
      <div className="item-content">{children}</div>
    </Wrapper>
  );
};

export default React.memo(Item);