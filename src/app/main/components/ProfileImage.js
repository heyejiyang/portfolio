import React from 'react';
import styled from 'styled-components';

const ProfileImage = ({ className }) => {
  return (
    <div className={className}>
      <div className="layout-width">
        <div className="tit">
          <span>RESUME</span>
          양예지
        </div>
        {/* 원형 프로필 이미지 */}
        <div className="profile-wrapper">
          <img
            src="/images/profile.png"
            alt="profile"
            className="profile-photo"
          />
        </div>
      </div>
    </div>
  );
};

const StyledProfileImage = styled(ProfileImage)`
  background: #f8cfdc;
  height: 450px;
  padding: 50px 30px 10px;
  position: relative;

  @media all and (max-width: 650px) {
    & {
      background-position: center bottom;
    }
  }

  .profile-wrapper {
    position: absolute;
    right: calc(50% - 400px); /* 기존 이미지와 동일한 위치 */
    bottom: 10px; /* 하단에 고정 */
    width: 250px; /* 원형 프레임 크기 */
    height: 320px;
    border-radius: 18%; /* 원형으로 만들기 */
    background-color: white; /* 원형 배경을 흰색으로 */
    overflow: hidden; /* 원형을 벗어나는 이미지 부분 숨기기 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 추가 */
  }

  .profile-photo {
    width: 100%; /* 원형 안에 이미지 맞추기 */
    height: auto;
  }

  .tit {
    position: absolute;
    bottom: 10px;
    font-size: 1.35rem;

    span {
      font-size: 2rem;
      margin-right: 10px;
      letter-spacing: -1px;
    }
  }
`;

export default React.memo(StyledProfileImage);
