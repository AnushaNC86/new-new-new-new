import { inputLabelClasses, TextField } from "@mui/material";
import React from "react";
import "../loginOne/loginOne.css";
import "./mobileVerified.css";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetPasswordAsyncThunk } from "../../redux/reducers/resetPasswordSlice";
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const validationSchema = yup.object({
  OTP: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(4, "Must be exactly 4 digits")
    .max(4, "Must be exactly 4 digits"),
});

const MobileVerified = () => {
  const dispatch = useDispatch();

  const enteredEmailLogin = useSelector(
    (state: any) => state.FPverifyEmail.emailId
  );
  console.log("enteredEmailLogins", enteredEmailLogin);
  const enteredOtp = useSelector((state: any) => state.FPverifyEmail.otp);
  console.log("enteredOtps", enteredOtp);
  const resetPasswordResp = useSelector((state: any) => state.resetPass);
  console.log(resetPasswordResp.data.status);

  const initialvalues = {
    OTP: "",
  };

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialvalues,
    onSubmit: (values) => {},
    validationSchema: validationSchema,
  });
  const [password, setPassword] = useState<boolean>(false);

  const togglePassword = () => {
    setPassword(!password);
  };
  const navigate = useNavigate();
  const submitHandler = (e: any) => {
    e.preventDefault();
    dispatch(
      resetPasswordAsyncThunk({
        emailId: enteredEmailLogin,
        otp: enteredOtp,
        password: e.target.OTP.value,
      })
    );
    if (
      resetPasswordResp &&
      resetPasswordResp.data &&
      resetPasswordResp.data.status === 200
    ) {
      alert(resetPasswordResp && resetPasswordResp.data.data);
      navigate("/login/forgotpassword/verification/verified");
    }
  };
  return (
    <>
      <div className="otpVericationContainer">
        <div className="signUpCloses">
          <div className="mainBackImg">
            <img
              src={require("../../assets/Shape@2x.png")}
              alt=""
              className="backImg"
              onClick={() => navigate("/login/forgotpassword")}
            />
          </div>
        </div>
        <div className="otpVerificationBody">
          {" "}
          <div className="otpVericationHead">
            <div className="otpVericationImg">
              <img src={require("../../assets/icn_verified_icon.png")} alt="" />
            </div>
            <div className="otpVerificationHEading">Verified!</div>
            <div className="otpVericationContents">
              Your mobile no. is verified.
              <br />
              Enter the new password to reset you account.
            </div>
          </div>
          <div className="otpVericationForm">
            <form
              className="otpFormContainer"
              onSubmit={(e: any) => {
                submitHandler(e);
              }}
            >
              <div className="otpVerificationFormContents">
                <div className="loginTxtImg">
                  <TextField
                    id="standard-basic"
                    label="Enter new Password"
                    name="OTP"
                    type={password ? "text" : "password"}
                    variant="standard"
                    value={values.OTP}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    sx={{
                      width: 1,
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "black",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "#0000007f",
                      },
                      "& .MuiFormLabel-root.Mui-disabled": {
                        color: "red",
                      },
                    }}
                    InputLabelProps={{
                      sx: {
                        // set the color of the label when not shrinked
                        color: "#0000008a",
                        [`&.${inputLabelClasses.shrink}`]: {
                          // set the color of the label when shrinked (usually when the TextField is focused)
                          color: "#0000008a",
                        },
                      },
                    }}
                  />
                  <div className="loginOneError">{errors.OTP}</div>

                  <img
                    src={require("../../assets/icn_view_inactive.png")}
                    alt=""
                    className="passwordImg"
                    onClick={togglePassword}
                  />
                </div>
                <div className="createAccBtn">
                  <button
                    className="loginOneLogin"
                    onSubmit={() =>
                      navigate("/login/forgotpassword/verification/verified")
                    }
                  >
                    Reset
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileVerified;
