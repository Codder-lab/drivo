import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { COLORS, FONTS } from '@/constants';
import { width, height } from '@/constants/Dimensions';

type CustomButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  style = {},
  textStyle = {},
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: width * 0.8,
    borderRadius: width * 0.1,
    padding: width * 0.035,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: COLORS.primary,
    marginBottom: height * 0.035,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: width * 0.045,
    fontWeight: 'bold',
    fontFamily: FONTS.bold,
  },
});

export default CustomButton;
