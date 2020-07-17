import { connect } from "react-redux";
import { getPosition } from "../../Redux/usersReducer/positionOperstors";
// import { getToken } from "../../Redux/usersReducer/tokenOperator";
import {
  registerUser,
  // updateUsers,
} from "../../Redux/usersReducer/userOperators";
import Form from "./Form";

const mapStateToProps = (state) => ({
  positionState: state.positionState,
  // tokenState: state.tokenState,
});

const mapDispatchToProps = (dispatch) => ({
  getPositions: () => dispatch(getPosition()),
  // getToken: () => dispatch(getToken()),
  // updateUsers: () => dispatch(updateUsers()),
  registerUser: (userData, token) =>
    dispatch(registerUser(dispatch, userData, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
