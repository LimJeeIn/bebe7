import axios from 'axios';
import { apiURL } from '../apiURL';

export const followAPI = async (accountName, userToken) => {
  try {
    const result = await axios({
      method: 'POST',
      url: `${apiURL}profile/${accountName}/follow`,
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
