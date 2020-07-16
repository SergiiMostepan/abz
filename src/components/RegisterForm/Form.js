import React, { Component } from "react";
import { Formik, Field, Form } from "formik";
import ImageUploader from "react-images-upload";
import * as Yup from "yup";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
  }
  state = {
    file: null,
    imagePreviewUrl: "",
    pictures: "",
  };

  componentDidMount() {
    this.props.getPositions();
    this.props.getToken();
  }

  onDrop(picture) {
    this.setState({
      pictures: picture,
    });
  }

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
    // let formData = new FormData();
    // console.log(this.props);
    return (
      <Formik
        initialValues={{
          userName: "",
          userEmail: "",
          userPhone: "",
          picked: "1",
        }}
        validationSchema={this.SignupSchema}
        onSubmit={async (values) => {
          // const newUser = {
          //   name: values.userName,
          //   email: values.userEmail,
          //   phone: values.userPhone,
          //   position_id: +values.picked,
          //   photo: this.state.pictures[0],
          // };
          this.props.getToken();
          let formData = new FormData();
          formData.append("position_id", +values.picked);
          formData.append("name", values.userName);
          formData.append("email", values.userEmail);
          formData.append("phone", values.userPhone);
          formData.append("photo", this.state.pictures[0]);

          this.props.registrateUser(formData, this.props.tokenState);
          // console.log(this.props);
          this.props.updateUsers();
          // this.props.getUsers();
        }}
      >
        {({ errors, touched }) => (
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
              Select your position{" "}
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
                className={this.state.pictures[0] ? "valid" : ""}
                buttonText="Browse"
                singleImage={true}
                withLabel={true}
                label={
                  this.state.pictures[0] ? "Uploaded" : "Upload your photo"
                }
                withIcon={false}
                onChange={this.onDrop}
                imgExtension={[".jpg", ".jpeg"]}
                maxFileSize={5242880}
              />
            </label>
            <button className={"ref-form-btn"} type="submit">
              Sing up now
            </button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default UserForm;
