import React, { useCallback, useEffect, useRef, useState } from "react";
import { TextInput, Alert } from "react-native";
import SignUpScreen from "views/signup/SignUpScreen";

const SignUpScreenViewModel = () => {
  // State hooks for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Refs for focus management
  const firstNameRef = useRef<TextInput>(null);
  const lastNameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  // Auto focus first field on mount
  useEffect(() => {
    firstNameRef.current?.focus();
  }, []);

  const onSignup = useCallback(() => {
    if (!firstName || !lastName || !email || !password) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }
    console.log({ firstName, lastName, email, password });
  }, [firstName, lastName, email, password]);

  const onSocialSignup = useCallback((provider: "google" | "facebook") => {
    console.log(`Signup with ${provider}`);
  }, []);

  return (
    <SignUpScreen
      firstName={firstName}
      lastName={lastName}
      email={email}
      password={password}
      firstNameRef={firstNameRef}
      lastNameRef={lastNameRef}
      emailRef={emailRef}
      passwordRef={passwordRef}
      setFirstName={setFirstName}
      setLastName={setLastName}
      setEmail={setEmail}
      setPassword={setPassword}
      onSignup={onSignup}
      onSocialSignup={onSocialSignup}
    />
  );
};

export default SignUpScreenViewModel;
