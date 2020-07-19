import axios from "axios";
import { usersSlice, registerSlice } from "./userReducers";
import { errorSlice } from "../errorReducers/errorReducers";
import { pageSlice } from "../usersReducer/pageReducer";

export const getUsers = (dispatch, page = "1") => {
  return (dispatch) => {
    dispatch(usersSlice.actions.getUsersStarted());
    axios
      .get(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
      )
      .then((res) => {
        dispatch(usersSlice.actions.getUsersSuccess(res.data));
        dispatch(pageSlice.actions.getPageSuccess(res.data));
      })
      .catch((err) => {
        dispatch(errorSlice.actions.getUsersError(err));
      });
  };
};

export const registerUser = (dispatch, userData, token) => {
  return (dispatch) => {
    dispatch(registerSlice.actions.userRegistrationStarted());
    axios({
      method: "post",
      url: "https://frontend-test-assignment-api.abz.agency/api/v1/users",
      data: userData,
      headers: { "content-type": "multipart/form-data", Token: token },
    })
      .then((res) => {
        dispatch(
          registerSlice.actions.userRegistrationSuccess(res.data.success)
          // registerSlice.actions.userRegistrationSuccess(res.message)
        );

        dispatch(updateUsers());
      })
      .catch((err) => {
        const { response: { data: { message } = {} } = {} } = err;
        dispatch(errorSlice.actions.registerError(message));
      });
  };
};

export const updateUsers = (dispatch) => {
  return (dispatch) => {
    dispatch(usersSlice.actions.getUsersStarted());
    axios
      .get(
        "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6"
      )
      .then((res) => {
        dispatch(usersSlice.actions.updateUsersSuccess(res.data));
      })
      .catch((err) => {
        dispatch(errorSlice.actions.getUsersError(err));
      });
  };
};
