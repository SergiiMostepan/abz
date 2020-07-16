import { connect } from "react-redux";
import { getUsers } from "../../Redux/usersReducer/userOperators";
import Users from "./Users";

const MSTP = (state) => ({
  usersState: state.usersState,
  pageState: state.pageState,
});

const MDTP = (dispatch) => ({
  getUsers: (page) => dispatch(getUsers(dispatch, page)),
});

export default connect(MSTP, MDTP)(Users);
