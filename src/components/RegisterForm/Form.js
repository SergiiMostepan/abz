import React, { Component } from "react";
import { Formik, Field, Form } from "formik";
import ImageUploader from "react-images-upload";
import * as Yup from "yup";
import { getToken } from "../../Redux/usersReducer/tokenOperator";

class UserForm extends Component {
  // constructor(props) {
  //   super(props);
  //   this.onDrop = this.onDrop.bind(this);
  // }
  state = {
    // file: null,
    // imagePreviewUrl: "",
    picture: "",
    isClicked: false,
  };

  componentDidMount() {
    this.props.getPositions();
    // this.props.getToken();
  }

  onDrop = ([picture]) => this.setState({ picture });

  handleClickBtn = () => {
    this.setState({ isClicked: true });
    // if (Object.keys(errors).length === 0) {
    //   handleReset();
    // }
  };

  handleClearPicture = () => {
    this.setState({ picture: "" });
  };

  handleClearBtnStatus = () => {
    this.setState({ isClicked: false });
  };

  SignupSchema = Yup.object().shape({
    userName: Yup.string()
      .min(2, "Error")
      .max(60, "Error")
      .required("Required"),
    userEmail: Yup.string()
      .email("Error")
      .min(2, "Error")
      .max(100, "Error")
      .required("Required"),
    userPhone: Yup.string()
      .matches(/(\+380)/)
      .length(13, "Error")
      .required("Required"),
  });

  render() {
    // console.log(this.state);
    return (
      <Formik
        initialValues={{
          userName: "",
          userEmail: "",
          userPhone: "",
          picked: "1",
        }}
        validationSchema={this.SignupSchema}
        onSubmit={async (values, handleReset) => {
          const token = await getToken();

          const formData = new FormData();
          formData.append("position_id", +values.picked);
          formData.append("name", values.userName);
          formData.append("email", values.userEmail);
          formData.append("phone", values.userPhone);
          formData.append("photo", this.state.picture);
          if (this.state.isClicked && this.state.picture) {
            this.props.registerUser(formData, token);
            handleReset.resetForm();
            this.handleClearPicture();
            this.handleClearBtnStatus();
          }
        }}
      >
        {({ errors, touched }) => {
          let fileName;
          this.state.picture
            ? (fileName = this.state.picture.name)
            : (fileName = "");

          return (
            <Form className={"reg-form"}>
              <label htmlFor="userName" className={"reg-form-label"}>
                Name
              </label>
              <Field
                className={
                  errors.userName && touched.userName
                    ? "reg-form-input invalid"
                    : "reg-form-input"
                }
                id="userName"
                name="userName"
                placeholder="Your name"
              />

              <label htmlFor="userEmail" className={"reg-form-label"}>
                Email
              </label>
              <Field
                className={
                  errors.userEmail && touched.userEmail
                    ? "reg-form-input invalid"
                    : "reg-form-input"
                }
                id="userEmail"
                name="userEmail"
                placeholder="Your email"
              />

              <label htmlFor="userPhone" className={"reg-form-label"}>
                Phone number
              </label>
              <Field
                className={
                  errors.userPhone && touched.userPhone
                    ? "reg-form-input invalid"
                    : "reg-form-input"
                }
                id="userPhone"
                name="userPhone"
                placeholder="+380 XX XXX XX XX"
              />
              <p className={"reg-form-input-text"}>
                Еnter phone number in open format
              </p>

              <label
                htmlFor="radiobtngroup"
                className={"ref-form-radiobtn-label"}
              >
                Select your position
              </label>
              <div
                id="radiobtngroup"
                className={"ref-form-radiobtn"}
                role="group"
                aria-labelledby="my-radio-group"
              >
                {this.props.positionState.map((item) => (
                  <label key={item.id} className={"reg-form-label"}>
                    <Field
                      className={"ref-form-radiobtn-item"}
                      type="radio"
                      name="picked"
                      value={item.id.toString()}
                    />
                    {item.name}
                  </label>
                ))}
              </div>
              <label className={"reg-form-label reg-form-label-btn"}>
                Photo
                <ImageUploader
                  className={
                    !this.state.picture && this.state.isClicked ? "invalid" : ""
                  }
                  buttonText="Browse"
                  singleImage={true}
                  withLabel={true}
                  label={
                    this.state.picture
                      ? fileName
                      : !this.state.picture && this.state.isClicked
                      ? "No file chosen"
                      : "Upload your photo"
                  }
                  withIcon={false}
                  onChange={this.onDrop}
                  imgExtension={[".jpg", ".jpeg"]}
                  maxFileSize={5242880}
                />
              </label>
              <button
                className={"ref-form-btn"}
                onClick={this.handleClickBtn}
                type="submit"
              >
                Sing up now
              </button>
            </Form>
          );
        }}
      </Formik>
    );
  }
}

export default UserForm;
