import React, { useEffect, useContext } from "react";
import { Context as AuthContent } from "../context/authContext";

const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContent);

  useEffect(() => {
    tryLocalSignin();
  }, []);
  return null;
};

export default ResolveAuthScreen;
