import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { followAPI } from '../../../api/profile/followAPI';
import { unfollowAPI } from '../../../api/profile/unFollowAPI';
import { accountNameState } from '../../../atoms/Atoms';
import Profile from '../../../assets/images/basic-profile.svg';
import { SmallFollowButton, CancelButton } from '../button/Button.jsx';
import * as S from './UserFollow.style';

function UserFollow({ data }) {
  const [isFollow, setIsFollow] = useState(data.isfollow);
  const loginedAccount = useRecoilValue(accountNameState);
  const history = useHistory();

  const clickFollow = () => {
    if (isFollow) {
      unfollowAPI(data.accountname);
      setIsFollow(false);
    } else {
      followAPI(data.accountname);
      setIsFollow(true);
    }
  };

  const goToProfile = () => {
    history.push(`/profile/${data.accountname}`);
  };

  return (
    <S.UserBox onClick={goToProfile}>
      <S.ProfileImage src={data.image || Profile} alt="프로필 이미지" />
      <S.RightBox>
        <S.UserTitle>
          <S.Span>{data.username || '애월읍'}</S.Span>
          {data.userTitle || '위니브 감귤농장'}
        </S.UserTitle>
        <S.UserAddress>@{data.accountname || 'weniv_Mandarin'}</S.UserAddress>
      </S.RightBox>
      {loginedAccount !== data.accountname && isFollow === true && (
        <SmallFollowButton isActive={false} onClick={clickFollow} />
      )}
      {loginedAccount !== data.accountname && isFollow === false && (
        <CancelButton isActive={!!true} onClick={clickFollow} />
      )}
      {isFollow === null && null}
    </S.UserBox>
  );
}

export default UserFollow;
