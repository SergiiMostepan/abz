import axios from "axios";
import { usersSlice } from "./userReducers";
import { errorSlice } from "../errorReducers/errorReducers";

export const getUsers = (dispatch) => {
  return (dispatch) => {
    dispatch(usersSlice.actions.getUsersStarted());
    axios
      .get(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6`
      )
      .then((res) => {
        dispatch(usersSlice.actions.getUsersSuccess(res.data));
      })
      .catch((err) => {
        dispatch(errorSlice.actions.getContactsError(err));
      });
  };
};
