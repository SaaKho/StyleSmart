// actions.js
import { UPDATE_ACCESS_TOKEN } from './actionTypes';
import { UPDATE_USER_TOKEN } from './actionTypes';

export const updateAccessToken = (token) => ({
  type: UPDATE_ACCESS_TOKEN,
  payload: token,
});


export const updateUserToken = (userToken) => ({
  type: UPDATE_USER_TOKEN,
  payload: userToken,
});
