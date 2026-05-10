import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 40,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 48,
    marginTop: 20,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: "#7FCA3F",
    alignItems: "center",
    justifyContent: "center",
  },
  logoPlus: {
    fontSize: 32,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  heading: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1A1A1A",
    marginBottom: 12,
    textAlign: "center",
  },
  subheading: {
    fontSize: 14,
    color: "#888888",
    textAlign: "center",
    marginBottom: 36,
    lineHeight: 20,
  },
  formSection: {
    marginBottom: 24,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1A1A1A",
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#E5E5E5",
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 50,
    marginBottom: 16,
    backgroundColor: "#FAFAFA",
  },
  inputContainerFocused: {
    borderColor: "#7FCA3F",
    backgroundColor: "#F9FFEF",
  },
  inputIcon: {
    marginRight: 10,
    color: "#999999",
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#1A1A1A",
    padding: 0,
  },
  inputPlaceholder: {
    color: "#AAAAAA",
  },
  eyeIcon: {
    marginLeft: 10,
    color: "#CCCCCC",
  },
  signInButton: {
    backgroundColor: "#7FCA3F",
    height: 50,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    shadowColor: "#7FCA3F",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  signInButtonText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#FFFFFF",
    marginRight: 8,
  },
  signInArrow: {
    fontSize: 18,
    color: "#FFFFFF",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#E5E5E5",
  },
  dividerText: {
    paddingHorizontal: 12,
    fontSize: 12,
    color: "#999999",
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    marginBottom: 28,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FAFAFA",
  },
  socialButtonIcon: {
    fontSize: 24,
  },
  facebookIcon: {
    color: "#1877F2",
  },
  googleIcon: {
    color: "#EA4335",
  },
  instagramIcon: {
    color: "#E1306C",
  },
  footerLinksContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  footerText: {
    fontSize: 13,
    color: "#666666",
    textAlign: "center",
    marginBottom: 8,
  },
  footerLink: {
    color: "#7FCA3F",
    fontWeight: "600",
  },
  forgotPasswordLink: {
    fontSize: 13,
    color: "#7FCA3F",
    fontWeight: "600",
    textAlign: "center",
  },
});

export default function Index() {
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("elementary221b@gmail.com");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // Handle sign in logic here
    console.log("Sign In pressed");
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo Section */}
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Text style={styles.logoPlus}>✚</Text>
          </View>
        </View>

        {/* Heading Section */}
        <Text style={styles.heading}>Sign In</Text>
        <Text style={styles.subheading}>
          Let&apos;s experience the joy of telecare AI.
        </Text>

        {/* Email Input */}
        <View style={styles.formSection}>
          <Text style={styles.label}>Email Address</Text>
          <View
            style={[
              styles.inputContainer,
              emailFocused && styles.inputContainerFocused,
            ]}
          >
            <MaterialCommunityIcons
              name="email-outline"
              size={20}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#AAAAAA"
              value={email}
              onChangeText={setEmail}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              keyboardType="email-address"
            />
          </View>
        </View>

        {/* Password Input */}
        <View style={styles.formSection}>
          <Text style={styles.label}>Password</Text>
          <View
            style={[
              styles.inputContainer,
              passwordFocused && styles.inputContainerFocused,
            ]}
          >
            <MaterialCommunityIcons
              name="lock-outline"
              size={20}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your password..."
              placeholderTextColor="#AAAAAA"
              value={password}
              onChangeText={setPassword}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <MaterialCommunityIcons
                name={showPassword ? "eye" : "eye-off"}
                size={20}
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Sign In Button */}
        <TouchableOpacity
          style={styles.signInButton}
          onPress={handleSignIn}
          activeOpacity={0.8}
        >
          <Text style={styles.signInButtonText}>Sign In</Text>
          <MaterialCommunityIcons
            name="arrow-right"
            size={20}
            style={styles.signInArrow}
          />
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.divider} />
        </View>

        {/* Social Login Buttons */}
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity
            style={styles.socialButton}
            activeOpacity={0.7}
            onPress={() => console.log("Facebook sign in")}
          >
            <MaterialCommunityIcons
              name="facebook"
              size={24}
              style={styles.facebookIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.socialButton}
            activeOpacity={0.7}
            onPress={() => console.log("Google sign in")}
          >
            <MaterialCommunityIcons
              name="google"
              size={24}
              style={styles.googleIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.socialButton}
            activeOpacity={0.7}
            onPress={() => console.log("Instagram sign in")}
          >
            <MaterialCommunityIcons
              name="instagram"
              size={24}
              style={styles.instagramIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Footer Links */}
        <View style={styles.footerLinksContainer}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={styles.footerText}>Don&apos;t have an account? </Text>
            <TouchableOpacity onPress={() => console.log("Sign Up pressed")}>
              <Text style={[styles.footerText, styles.footerLink]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => console.log("Forgot Password pressed")}
          >
            <Text style={styles.forgotPasswordLink}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
