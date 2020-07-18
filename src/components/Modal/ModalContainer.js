import { connect } from "react-redux";
import { registerSlice } from "../../Redux/usersReducer/userReducers";
import Modal from "./Modal";

const mapStateToProps = (state) => ({
  registerState: state.registerState,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () =>
    dispatch(registerSlice.actions.userRegistrationStatusClear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
