import React, { useContext } from "react";
import { Button } from "@mui/material";
import { AuthContext } from "../context/authContext";

function SignOut() {
  const { dispatch } = useContext(AuthContext);
  const SignOutFromGoogle = async () => {
    try {
      dispatch({ type: "LOGOUT" });
      // Sign-out successful.
      console.log("Sign-out successful.");
    } catch (error) {
      // An error happened.
      console.log((error as Error).message);
    }
  };

  return (
    <div>
      <Button onClick={SignOutFromGoogle}>Sign Out</Button>
    </div>
  );
}

export default SignOut;
