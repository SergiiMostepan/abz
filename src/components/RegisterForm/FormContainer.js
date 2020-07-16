import { connect } from "react-redux";
import { getPosition } from "../../Redux/usersReducer/positionOperstors";
import { getToken } from "../../Redux/usersReducer/tokenOperator";
import {
  registrateUser,
  updateUsers,
} from "../../Redux/usersReducer/userOperators";
import Form from "./Form";

const MSTP = (state) => ({
  positionState: state.positionState,
  tokenState: state.tokenState,
});

const MDTP = (dispatch) => ({
  getPositions: () => dispatch(getPosition()),
  getToken: () => dispatch(getToken()),
  updateUsers: () => dispatch(updateUsers()),

  registrateUser: (userData, token) =>
    dispatch(registrateUser(dispatch, userData, token)),
});

export default connect(MSTP, MDTP)(Form);
