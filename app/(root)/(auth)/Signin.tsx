import {
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
import { LightColors, DarkColors, images, FONTS, icons } from '@/constants';
import { width, height } from '@/constants/Dimensions';
import { useState } from 'react';
import InputField from '@/components/InputField';
import CustomButton from '@/components/CustomButton';
import { Link } from 'expo-router';
import OAuth from '@/components/OAuth';

const Signin = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [isFocused, setIsFocused] = useState(false);
  const onSignInPress = async () => {};
  const theme = useColorScheme() === 'dark' ? DarkColors : LightColors;
  const signInImage =
    useColorScheme() == 'dark' ? images.signUpCar : images.signUpCarDark;

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <View style={styles.createAccountContainer}>
        <Text style={[styles.createAccountText, { color: theme.black }]}>
          👋 Welcome
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
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
                title="Log In"
                onPress={onSignInPress}
                style={styles.customButton}
              />

              {/* OAuth */}
              <OAuth />

              <Link href={'/(root)/(auth)/Signup'} style={[styles.alreadyLink, { color: theme.gray }]}>
                <Text>Don't have an account? </Text>
                <Text style={[styles.alreadyLogin, { color: theme.black }]}>
                  Sign Up
                </Text>
              </Link>

              {/* Google Verification */}
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: COLORS.white,
  },
  createAccountContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: COLORS.white,
    height: height * 0.15,
  },
  createAccountText: {
    fontSize: width * 0.08,
    //color: COLORS.black,
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
    //color: COLORS.primary,
    fontSize: 14,
  },
});
