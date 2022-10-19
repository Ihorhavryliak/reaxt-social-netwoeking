import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'reax-social-network/auth/SET_USER_DATE';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFeching: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:

      return {
        ...state,
        ...action.payload,
      }

    default:
      return state;
  }

}

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth }
});


export const getAutUserDate = () => async (dispatch) => {
  let response = await authAPI.me();

  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUserData(id, login, email, true));
  }


}

export const login = (email, password, remeberMe) => async (dispatch) => {

  let response = await authAPI.login(email, password, remeberMe);

  if (response.data.resultCode === 0) {
    dispatch(getAutUserDate());
  } else {
    let messege = response.data.messages.length > 0 ? response.data.messages[0] : 'Some Error';
    dispatch(stopSubmit('login', { _error: messege }));
  }

}

export const logOut = () => async (dispatch) => {
  let response = await authAPI.loginOut();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }

}

export default authReducer;