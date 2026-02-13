import React, { useRef, useEffect, useState } from "react";
import { TextInput } from "react-native";
import { navigate } from "@navigation";
import { SCREENS } from "@shared-constants";
import NewLoginScreen from "views/newlogin/NewLogin";

const NewLoginViewModel = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef<TextInput>(null);
  const passRef = useRef<TextInput>(null);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const lgnbuttonPress = () => {
    navigate(SCREENS.DASHBOARD);
  };

  const Signupbuttonpress = () => {
    navigate(SCREENS.SIGNUPSCREEN);
  };

  return (
    <NewLoginScreen
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      emailRef={emailRef}
      passRef={passRef}
      lgnbuttonPress={lgnbuttonPress}
      Signupbuttonpress={Signupbuttonpress}
    />
  );
};

export default NewLoginViewModel;
