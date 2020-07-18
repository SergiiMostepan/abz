import axios from "axios";
// import { tokenSlice } from "./tokenRuducer";
// import { errorSlice } from "../errorReducers/errorReducers";

export const getToken = async () => {
  // return (dispatch) => {
  // dispatch(tokenSlice.actions.getTokenStarted());
  const response = await axios.get(
    `https://frontend-test-assignment-api.abz.agency/api/v1/token`
  );
  return response.data.token;
};
// };
