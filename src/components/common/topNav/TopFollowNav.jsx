import React, { useState } from 'react';
import * as S from './TopFollowNav.style';
import arrowLeft from '../../../assets/icon/icon-arrow-left.svg';
import { useNavigate } from 'react-router-dom';

export default function TopFollowNav() {
  const navigate = useNavigate();

  return (
    <>
      <S.Nav>
        <S.arrowButton onClick={() => navigate(-1)}>
          <img src={arrowLeft} alt="뒤로가기" />
        </S.arrowButton>
        <S.Title>Followers</S.Title>
      </S.Nav>
    </>
  );
}
