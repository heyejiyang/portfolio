import React, { useState, useCallback } from 'react';
import { Section } from 'react-fullpage';
import Image from 'next/image';
import styled from 'styled-components';
import classNames from 'classnames';

const Tab1Content = () => {
  return (
    <>
      <Image
        src="/images/profile.png"
        width={250}
        height={250}
        alt="포트폴리오 이미지"
      />
      <div>내용....</div>
      <a href="#" target="_blank">
        포트폴리오 보기
      </a>
    </>
  );
};

const Tab2Content = () => {
  return (
    <>
      <Image
        src="/images/profile.png"
        width={250}
        height={250}
        alt="포트폴리오 이미지"
      />
      <div>내용....</div>
      <a href="#" target="_blank">
        포트폴리오 보기
      </a>
    </>
  );
};

const Tab3Content = () => {
  return (
    <>
      <Image
        src="/images/profile.png"
        width={250}
        height={250}
        alt="포트폴리오 이미지"
      />
      <div>내용....</div>
      <a href="#" target="_blank">
        포트폴리오 보기
      </a>
    </>
  );
};

const items = {
  tab1: {
    title: '제목1',
    Content: Tab1Content,
  },
  tab2: {
    title: '제목2',
    Content: Tab2Content,
  },
  tab3: {
    title: '제목3',
    Content: Tab3Content,
  },
};

const Wrapper = styled.div`
  padding-top: 100px;

  .tab-group {
    display: flex;
    height: 45px;
    border-bottom: 2px solid #000;

    li {
      padding: 0 25px;
      cursor: pointer;
      border: 1px solid #000;
      border-bottom: 0;
      margin-right: 5px;
      line-height: 43px;
      font-size: 1.4rem;
    }

    li.on {
      background: #000;
      color: #fff;
    }
  }

  .tab-content {
    padding: 20px;
  }
`;

const Portfolio = () => {
  const [item, setItem] = useState(items.tab1);
  const [tab, setTab] = useState('tab1');

  const onClick = useCallback((tab) => {
    setItem(items[tab]);
    setTab(tab);
  }, []);

  const { title, Content } = item;

  return (
    <Section>
      <Wrapper className="layout-width">
        <h2>PORTFOLIO</h2>

        <ul className="tab-group">
          <li
            onClick={() => onClick('tab1')}
            className={classNames({ on: tab === 'tab1' })}
          >
            포켓몬 도감
          </li>
          <li
            onClick={() => onClick('tab2')}
            className={classNames({ on: tab === 'tab2' })}
          >
            HIDOG
          </li>
          <li
            onClick={() => onClick('tab3')}
            className={classNames({ on: tab === 'tab3' })}
          >
            상담관리
          </li>
        </ul>
        <div className="tab-content">
          <div class="title">{title}</div>
          <Content />
        </div>
      </Wrapper>
    </Section>
  );
};

export default React.memo(Portfolio);