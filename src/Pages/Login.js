import React from "react";
import { Button, Container } from "react-bootstrap";
import userIcon from "../images/user.png";
import googleIcon from "../images/goolge.png";
import useFirebase from "../hooks/useFirebase";
import useAuth from "../hooks/useAuth";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
const Login = () => {
  const { googleSignIn } = useAuth();
  const location = useLocation(),
    history = useHistory();
  return (
    <div>
      <Container className="my-3">
        <div className="bg-light p-5 w-50 mx-auto">
          <img width="100px" src={userIcon} alt="" />
          <h4 className="my-5">Login With Your Google Account</h4>
          <Button
            onClick={() => googleSignIn(location, history)}
            className="w-50 mx auto mt-3"
          >
            {" "}
            <img
              className="text-start me-5"
              width="25px"
              src={googleIcon}
              alt=""
            />{" "}
            Google Sign In
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Login;
