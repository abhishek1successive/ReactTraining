import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
  Image,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./NewLoginstyle";
import AppButton from "components/Appbutton";
import AppInput from "components/AppInput";
import Glyphs from "assets/Glyphs";

interface LoginProps {
  email: string;
  password: string;
  setEmail: (v: string) => void;
  setPassword: (v: string) => void;
  emailRef: any;
  passRef: any;
  lgnbuttonPress: () => void;
  Signupbuttonpress: () => void;
}

const NewLoginScreen = (props: LoginProps) => {
  const { width, height } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.imageContainer}>
            <Image
              source={Glyphs.BookMyShow}
              style={[
                styles.image,
                { width: width * 0.75, height: height * 0.35 },
              ]}
              resizeMode="contain"
            />
          </View>

          {/* Email */}

          <AppInput
            ref={props.emailRef}
            placeholder="Email"
            value={props.email}
            onChangeText={props.setEmail}
            keyboardType="email-address"
            returnKeyType="next"
            autoCapitalize="none"
            onSubmitEditing={() => props.passRef.current?.focus()}
          />

          {/* Password */}
          <AppInput
            ref={props.passRef}
            placeholder="Password"
            value={props.password}
            onChangeText={props.setPassword}
            returnKeyType="done"
            secure
          />

          {/* Forgot */}
          <TouchableOpacity style={styles.forgot}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Login */}

          <AppButton
            title={"Login"}
            disabled={true}
            onPress={props.lgnbuttonPress}
          />

          {/* Divider */}
          <Text style={styles.orText}>Or Login Using</Text>

          {/* Social */}
          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialBtn}>
              <Text style={{ fontWeight: "600" }}>G</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialBtn}>
              <Text style={{ fontWeight: "600" }}>f</Text>
            </TouchableOpacity>
          </View>

          {/* Signup */}
          <TouchableOpacity
            style={{ marginTop: 35 }}
            onPress={props.Signupbuttonpress}
          >
            <Text style={styles.signupText}>
              Don’t have an account?{" "}
              <Text style={{ fontWeight: "700" }}>Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default NewLoginScreen;
