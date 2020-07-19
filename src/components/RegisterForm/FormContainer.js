import { connect } from "react-redux";
import { getPosition } from "../../Redux/usersReducer/positionOperstors";

import { registerUser } from "../../Redux/usersReducer/userOperators";
import Form from "./Form";

const mapStateToProps = (state) => ({
  positionState: state.positionState,
  errorState: state.errorState,
});

const mapDispatchToProps = (dispatch) => ({
  getPositions: () => dispatch(getPosition()),

  registerUser: (userData, token) =>
    dispatch(registerUser(dispatch, userData, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
