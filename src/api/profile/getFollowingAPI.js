import axios from 'axios';
import { apiURL } from '../apiURL';

export const loadFollowingListAPI = async (accountName, userToken) => {
  try {
    const result = await axios({
      method: 'GET',
      url: `${apiURL}profile/${accountName}/following/?limit=Number&skip=Number`,
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      },
    });
    return result.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
