import React, { Fragment, Component } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

class Modal extends Component {
  state = { showModal: true };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    // console.log(this.props);
    return (
      <Fragment>
        <ReactModal
          isOpen={this.props.registerState}
          contentLabel="onRequestClose Example"
          onRequestClose={this.props.closeModal}
          className={"modal"}
          overlayClassName={"overlay"}
        >
          <div className={"modal-header-container"}>
            <h2 className={"modal-header-container-text"}>Congratulations</h2>
            <button
              className={"modal-header-container-btn"}
              //   onClick={this.handleCloseModal}
              onClick={this.props.closeModal}
            ></button>
          </div>
          <div className={"modal-body-container"}>
            <p className={"modal-body-container-text"}>
              You have successfully passed the registration
            </p>
          </div>
          <div className={"modal-footer-container"}>
            <button
              className={"modal-close-btn"}
              onClick={this.props.closeModal}
            >
              Great
            </button>
          </div>
        </ReactModal>
      </Fragment>
    );
  }
}

export default Modal;
