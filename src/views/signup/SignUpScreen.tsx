import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
  useWindowDimensions,
  TextInput,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./SignUpstyles";
import AppInput from "components/AppInput";
import AppButton from "components/Appbutton";
import Glyphs from "assets/Glyphs";

type Setter = React.Dispatch<React.SetStateAction<string>>;
type InputRef = React.RefObject<TextInput | null>;

interface SignUpProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  firstNameRef: InputRef;
  lastNameRef: InputRef;
  emailRef: InputRef;
  passwordRef: InputRef;
  setFirstName: Setter;
  setLastName: Setter;
  setEmail: Setter;
  setPassword: Setter;
  onSocialSignup: (provider: "google" | "facebook") => void;
  onSignup: () => void;
  onlogin: () => void;
}

const SignUpScreen = (props: SignUpProps) => {
  const { width, height } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={[styles.container, { minHeight: height }]}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <View style={styles.imageContainer}>
            <Image
              source={Glyphs.BookMyShow}
              style={[
                styles.image,
                { width: width * 0.5, height: height * 0.18 },
              ]}
              resizeMode="contain"
            />
          </View>

          {/* First Name */}
          <AppInput
            ref={props.firstNameRef}
            placeholder="FirstName"
            value={props.firstName}
            onChangeText={props.setFirstName}
            returnKeyType="next"
            autoCapitalize="none"
            onSubmitEditing={() => props.lastNameRef.current?.focus()}
          />

          {/* Last Name */}
          <AppInput
            ref={props.lastNameRef}
            placeholder="LastName"
            value={props.lastName}
            onChangeText={props.setLastName}
            returnKeyType="next"
            autoCapitalize="none"
            onSubmitEditing={() => props.emailRef.current?.focus()}
          />

          {/* Email Address */}
          <AppInput
            ref={props.emailRef}
            placeholder="E-Mail"
            value={props.email}
            onChangeText={props.setEmail}
            returnKeyType="next"
            autoCapitalize="none"
            onSubmitEditing={() => props.passwordRef.current?.focus()}
          />

          {/* Password */}
          <AppInput
            ref={props.passwordRef}
            placeholder="Password"
            value={props.password}
            onChangeText={props.setPassword}
            returnKeyType="done"
            autoCapitalize="none"
            secure
          />

          {/* Signup Button */}
          {/* <TouchableOpacity style={styles.signupBtn} onPress={() => {}}>
            <Text style={styles.signupBtnText}>Signup</Text>
          </TouchableOpacity> */}

          <AppButton
            title={"Sign Up"}
            disabled={true}
            onPress={props.onSignup}
          />

          {/* Divider */}
          <Text style={styles.orText}>Or Signup Using</Text>

          {/* Social Signup */}
          <View style={styles.socialRow}>
            <TouchableOpacity
              style={styles.socialBtn}
              onPress={() => {}}
              activeOpacity={0.7}
            >
              <Text style={styles.googleText}>G</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialBtn}
              onPress={() => {}}
              activeOpacity={0.7}
            >
              <Text style={styles.facebookText}>f</Text>
            </TouchableOpacity>
          </View>

          {/* Login Link */}
          <TouchableOpacity
            style={styles.loginLink}
            onPress={() => {
              props.onlogin();
            }}
          >
            <Text style={styles.loginLinkText}>
              Already have a account?{" "}
              <Text style={styles.loginLinkHighlight}>Login</Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
