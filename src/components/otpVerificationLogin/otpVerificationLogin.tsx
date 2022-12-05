import "./otpVerificationLogin.css";
import "../../components/signUp/signUp.css";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/reducers/modalSlice";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import SignUp from "../signUp/signUp";
import forgotPasswordEmailSlice, {
  storeOtp,
} from "../../redux/reducers/forgotPasswordEmailSlice";
import { registerOtpAsyncThunk } from "../../redux/reducers/registerOtpSlice";

const OtpVerificationLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let showModal: any = useSelector((state: any) => state.modalStatus.value);
  const resRegOtp = useSelector((state: any) => state.verifyOtpReg);
  const enteredEmailLogin = useSelector(
    (state: any) => state.FPverifyEmail.emailId
  );
  console.log("enteredEmailLoginfrftgb", enteredEmailLogin);

  const submitHandler = (e: any) => {
    e.preventDefault();
    dispatch(storeOtp(e.target.otp.value));
    dispatch(
      registerOtpAsyncThunk({
        email: enteredEmailLogin,
        otp: e.target.otp.value,
      })
    );
    if (resRegOtp && resRegOtp.data && resRegOtp.data.status === 200) {
      // console.log("200");
      alert(resRegOtp && resRegOtp.data && resRegOtp.data.data);
      navigate("/login/forgotpassword/verification");
    } else {
      alert(resRegOtp && resRegOtp.message);
    }
  };
  return (
    <>
      <div className="otpVericationContainer">
        <div className="signUpClosess">
          <div>
            <img
              src={require("../../assets/Shape@2x.png")}
              alt=""
              className="backImg"
              onClick={() => navigate("/forgotPassword")}
            />
          </div>
        </div>
        <div className="otpVerificationBody">
          {" "}
          <div className="otpVericationHead">
            <div className="otpVericationImg">
              <img src={require("../../assets/icn_verify_icon.png")} alt="" />
            </div>
            <div className="otpVerificationHEading">Verification</div>
            <div className="otpVericationContents">
              We just sent you the OTP via SMS to your email address/mobile no.
              You should get it soon!
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
                <div className="otpTxtField">
                  <TextField
                    id="standard-basic"
                    label="Enter OTP"
                    variant="standard"
                    name="otp"
                    sx={{ width: 1 }}
                  />
                </div>
                <div className="createAccBtn">
                  <button className="createAccountBtn">
                    <div
                      className="NavTxt"
                      // onSubmit={() =>
                      //   navigate("/login/forgotpassword/verification")
                      // }
                    >
                      Verify
                    </div>
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

export default OtpVerificationLogin;
