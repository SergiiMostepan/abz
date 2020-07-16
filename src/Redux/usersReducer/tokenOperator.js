import axios from "axios";
import { tokenSlice } from "./tokenRuducer";
import { errorSlice } from "../errorReducers/errorReducers";

export const getToken = (dispatch) => {
  return (dispatch) => {
    dispatch(tokenSlice.actions.getTokenStarted());
    axios
      .get(`https://frontend-test-assignment-api.abz.agency/api/v1/token`)
      .then((res) => {
        dispatch(tokenSlice.actions.getTokenSuccess(res.data.token));
      })
      .catch((err) => {
        dispatch(errorSlice.actions.getUsersError(err));
      });
  };
};
