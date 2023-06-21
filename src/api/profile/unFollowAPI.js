import axios from 'axios';
import { apiURL } from '../apiURL';

export const unfollowAPI = async (accountName, userToken) => {
  try {
    const result = await axios({
      method: 'DELETE',
      url: `${apiURL}profile/${accountName}/unfollow`,
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
