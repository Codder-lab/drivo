import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  useColorScheme,
} from 'react-native';
import { LightColors, DarkColors, FONTS, icons, images } from '@/constants';
import { width, height } from '@/constants/Dimensions';
import React, { useState } from 'react';
import InputField from '@/components/InputField';
import CustomButton from '@/components/CustomButton';
import { Link, router } from 'expo-router';
import OAuth from '@/components/OAuth';
import { useSignUp } from '@clerk/clerk-expo';
import { ReactNativeModal } from 'react-native-modal';

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { isLoaded, signUp, setActive } = useSignUp();
  const [verification, setVerification] = useState({
    state: 'default',
    error: '',
    code: '',
  });

  const theme = useColorScheme() === 'dark' ? DarkColors : LightColors;

  // Handle submission of sign-up form
  const onSignUpPress = async () => {
    if (!isLoaded) return;

    // Start sign-up process using email and password provided
    try {
      await signUp.create({
        emailAddress: form.email,
        password: form.password,
      });

      // Send user an email with verification code
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

      // Set 'pendingVerification' to true to display second form
      // and capture OTP code
      setVerification({
        ...verification,
        state: 'pending',
      });
    } catch (err: any) {
      Alert.alert('Error', err.message);
    }
  };

  // Handle submission of verification form
  const onVerifyPress = async () => {
    if (!isLoaded) return;

    try {
      // Use the code the user provided to attempt verification
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code: verification.code,
      });

      // If verification was completed, set the session to active
      // and redirect the user
      if (signUpAttempt.status === 'complete') {
        // TODO: Create a database user

        await setActive({ session: signUpAttempt.createdSessionId });
        setVerification({
          ...verification,
          state: 'success',
        });
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        setVerification({
          ...verification,
          error: 'Verification failed. Please try again.',
          state: 'failed',
        });
      }
    } catch (err: any) {
      setVerification({
        ...verification,
        error: err.errors[0].LongMessage,
        state: 'failed',
      });
    }
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <View style={styles.createAccountContainer}>
        <Text style={[styles.createAccountText, { color: theme.black }]}>
          Create Your Account
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              <InputField
                label="Name"
                placeholder="Enter your name"
                icon={icons.person}
                value={form.name}
                onChangeText={(value) => setForm({ ...form, name: value })}
              />
              <InputField
                label="Email"
                placeholder="Enter your email"
                icon={icons.email}
                value={form.email}
                onChangeText={(value) => setForm({ ...form, email: value })}
              />
              <InputField
                label="Password"
                placeholder="Enter your password"
                icon={icons.lock}
                secureTextEntry={true}
                value={form.password}
                onChangeText={(value) => setForm({ ...form, password: value })}
              />
              <CustomButton
                title="Sign Up"
                onPress={onSignUpPress}
                style={styles.customButton}
              />

              {/* OAuth */}
              <OAuth />

              <Link
                href={'/(root)/(auth)/Signin'}
                style={[styles.alreadyLink, { color: theme.gray }]}
              >
                <Text>Already have an account? </Text>
                <Text style={[styles.alreadyLogin, { color: theme.black }]}>
                  Log In
                </Text>
              </Link>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        <ReactNativeModal
          isVisible={verification.state === 'pending'}
          onModalHide={() => {
            setVerification({ ...verification, state: 'success' });
          }}
        >
          <View
            style={[
              styles.pendingVerificationModal,
              { backgroundColor: theme.lightBlack },
            ]}
          >
            <Text style={[styles.pendingText, { color: theme.black }]}>
              Verification
            </Text>
            <Text style={styles.pendingVerificationText}>
              We've sent a verification code to {form.email}.
            </Text>
            <View style={styles.verifyInputfield}>
              <InputField
                label="Code"
                icon={icons.lock}
                placeholder="123456"
                value={verification.code}
                keyboardType="numeric"
                onChangeText={(code) => {
                  setVerification({
                    ...verification,
                    code,
                  });
                }}
              />
            </View>
            {verification.error && (
              <Text style={{ color: theme.danger, fontSize: 2, marginTop: 1 }}>
                {verification.error}
              </Text>
            )}
            <CustomButton
              title="Verify Email"
              onPress={onVerifyPress}
              style={{
                marginTop: 20,
                backgroundColor: theme.success,
                marginLeft: 15,
              }}
            />
          </View>
        </ReactNativeModal>

        <ReactNativeModal isVisible={verification.state === 'success'}>
          <View
            style={[
              styles.verificationModal,
              { backgroundColor: theme.lightBlack },
            ]}
          >
            <Image source={images.check} style={styles.checkImage} />
            <Text style={[styles.checkText, { color: theme.black }]}>
              Verified
            </Text>
            <Text style={[styles.checkVerified, { color: theme.grayText }]}>
              You have successfully verified your account.
            </Text>
            <CustomButton
              title="Browse Home"
              onPress={() => {
                router.replace('/(root)/(tabs)/Home');
              }}
              style={styles.browseButton}
            />
          </View>
        </ReactNativeModal>
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  createAccountContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.15,
  },
  createAccountText: {
    fontSize: width * 0.08,
    fontFamily: FONTS.bold,
    position: 'absolute',
    top: height * 0.08,
    left: width * 0.05,
  },
  inputContainer: {
    padding: width * 0.06,
  },
  customButton: {
    width: width * 0.9,
    marginTop: height * 0.035,
  },
  alreadyLink: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '200',
    marginTop: height * 0.008,
    fontFamily: FONTS.regular,
  },
  alreadyLogin: {
    fontSize: 14,
  },
  verificationModal: {
    paddingHorizontal: width * 0.01,
    paddingVertical: width * 0.02,
    borderRadius: width * 0.04,
    minHeight: width * 0.1,
  },
  checkImage: {
    width: width * 0.25,
    height: width * 0.25,
    marginHorizontal: 'auto',
    marginVertical: width * 0.01,
    marginTop: width * 0.05,
  },
  checkText: {
    fontSize: width * 0.08,
    fontFamily: FONTS.bold,
    textAlign: 'center',
  },
  checkVerified: {
    color: 'gray',
    fontFamily: FONTS.regular,
    textAlign: 'center',
    marginTop: width * 0.01,
  },
  browseButton: {
    backgroundColor: '#000',
    marginTop: width * 0.05,
    marginLeft: width * 0.05,
  },
  verificationText: {
    color: 'gray',
    fontFamily: FONTS.regular,
    marginBottom: 5,
  },
  pendingText: {
    fontSize: width * 0.075,
    fontFamily: FONTS.bold,
    marginBottom: 2,
    marginLeft: 15,
  },
  pendingVerificationText: {
    color: 'gray',
    fontFamily: FONTS.regular,
    marginTop: width * 0.01,
    marginLeft: 15,
  },
  verifyInputfield: {
    marginLeft: 15,
    marginRight: 15,
  },
  pendingVerificationModal: {
    paddingHorizontal: width * 0.02,
    paddingVertical: width * 0.08,
    borderRadius: width * 0.04,
    minHeight: width * 0.1,
  },
});
