import React, { useContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/config";
import { Button } from "@mui/material";
import { AuthContext } from "../context/authContext";

const Signin = () => {
  const { dispatch } = useContext(AuthContext);

  const signInWithGoogle = async () => {
    try {
      const googleProvider = new GoogleAuthProvider();
      const res = await signInWithPopup(auth, googleProvider);
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credidential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credidential?.accessToken;
      // The signed-in user info.

      console.log(res);
      if (res) {
        dispatch({ type: "LOGIN", payload: res });
      }
    } catch (error) {
      console.error(error as Error);
    }
  };

  return (
    <div>
      <Button onClick={signInWithGoogle}>Login with Google</Button>
    </div>
  );
};

export default Signin;
