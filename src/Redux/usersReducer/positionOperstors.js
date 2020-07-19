import axios from "axios";
import { positionSlice } from "./positionReducer";
import { errorSlice } from "../errorReducers/errorReducers";

export const getPosition = (dispatch) => {
  return (dispatch) => {
    dispatch(positionSlice.actions.getPositionStarted());
    axios
      .get(`https://frontend-test-assignment-api.abz.agency/api/v1/positions`)
      .then((res) => {
        dispatch(positionSlice.actions.getPositionSuccess(res.data.positions));
      })
      .catch((err) => {
        dispatch(errorSlice.actions.positionError(err));
      });
  };
};
