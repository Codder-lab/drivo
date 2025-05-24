import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TextInputProps,
  ImageSourcePropType,
  useColorScheme,
} from 'react-native';
import { LightColors, DarkColors, FONTS } from '@/constants';
import { width, height } from '@/constants/Dimensions';

type InputFieldProps = {
  label: string;
  placeholder?: string;
  icon?: ImageSourcePropType;
  value: string;
  secureTextEntry?: boolean;
  keyboardType?: TextInputProps['keyboardType'];
  onChangeText: (text: string) => void;
};

const InputField: React.FC<InputFieldProps> = ({
    label,
    placeholder,
    icon,
    value,
    secureTextEntry,
    keyboardType,
    onChangeText,
  }) => {
  const [isFocused, setIsFocused] = useState(false);
  const theme = useColorScheme() === 'dark' ? DarkColors : LightColors;

  return (
    <View style={styles.accountInputContainer}>
      <Text style={[styles.inputText, { color: theme.black }]}>{label}</Text>
      <View
        style={[
          styles.inputFieldContainer,
          { borderColor: isFocused ? theme.black : theme.grayLight },
          { backgroundColor: theme.grayLight },
          { borderColor: theme.black }
        ]}
      >
        {icon && <Image source={icon} style={styles.inputIcon} />}
        <TextInput
          placeholder={placeholder}
          value={value}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          style={[styles.textInputContainer, { color: theme.black }]}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholderTextColor={theme.grayText}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  accountInputContainer: {
    marginVertical: height * 0.003,
  },
  inputText: {
    fontSize: width * 0.04,
    fontFamily: FONTS.semiBold,
    marginBottom: height * 0.01,
    marginTop: height * 0.01,
  },
  inputIcon: {
    width: width * 0.053,
    height: width * 0.053,
    left: width * 0.03,
    top: height * 0.002,
  },
  inputFieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 9999,
    padding: width * 0.025,
  },
  textInputContainer: {
    borderRadius: 9999,
    marginLeft: width * 0.05,
    padding: width * 0.015,
    fontFamily: FONTS.semiBold,
    fontSize: width * 0.04,
    flex: 1,
  },
});

export default InputField;
