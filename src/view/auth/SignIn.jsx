import React from "react";

// // static import
import { useDispatch } from "react-redux";
import { userSignIn } from "../../store/reducers/authSlice";
import "./style.scss";

function SignIn() {
  // // initial state
  const dispatch = useDispatch();
  const handelLogin = () => {
    dispatch(userSignIn());
  };
  return (
    <div className="sign_in_container">
      <button onClick={handelLogin}>SignIn</button>
    </div>
  );
}

export default SignIn;
