import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TextInputProps,
  ImageSourcePropType,
} from 'react-native';
import { COLORS, FONTS } from '@/constants';

type InputFieldProps = {
  label: string;
  placeholder?: string;
  icon?: ImageSourcePropType;
  value: string;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
};

const InputField: React.FC<InputFieldProps> = ({
    label,
    placeholder,
    icon,
    value,
    secureTextEntry,
    onChangeText,
  }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.accountInputContainer}>
      <Text style={styles.inputText}>{label}</Text>
      <View
        style={[
          styles.inputFieldContainer,
          { borderColor: isFocused ? COLORS.primary : COLORS.grayLight },
        ]}
      >
        {icon && <Image source={icon} style={styles.inputIcon} />}
        <TextInput
          placeholder={placeholder}
          value={value}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          style={styles.textInputContainer}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  accountInputContainer: {
    marginVertical: 2,
  },
  inputText: {
    fontSize: 16,
    fontFamily: FONTS.semiBold,
    marginBottom: 10,
    marginTop: 10,
  },
  inputIcon: {
    width: 25,
    height: 25,
    left: 10,
    top: 2,
    tintColor: COLORS.gray,
  },
  inputFieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.grayLight,
    borderWidth: 0.5,
    borderRadius: 9999,
    padding: 10,
  },
  textInputContainer: {
    borderRadius: 9999,
    marginLeft: 20,
    padding: 6,
    fontFamily: FONTS.semiBold,
    fontSize: 16,
    flex: 1,
  },
});

export default InputField;
