import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
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

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isFocused, setIsFocused] = useState(false);
  const onSignUpPress = async () => {};
  const theme = useColorScheme() === 'dark' ? DarkColors : LightColors;
  const signUpImage =
    useColorScheme() === 'dark' ? images.signUpCarDark : images.signUpCar;

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

              <Link href={'/(root)/(auth)/Signin'} style={[styles.alreadyLink, { color: theme.gray }]}>
                <Text>Already have an account? </Text>
                <Text style={[styles.alreadyLogin, { color: theme.black }]}>
                  Log In
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

export default Signup;

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
