import { connect } from "react-redux";
import { getUsers } from "../../Redux/usersReducer/userOperators";
import Users from "./Users";

const mapStateToProps = (state) => ({
  usersState: state.usersState,
  pageState: state.pageState,
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: (page) => dispatch(getUsers(dispatch, page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
