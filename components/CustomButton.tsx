import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
  View,
  useColorScheme,
} from 'react-native';
import { LightColors, DarkColors, FONTS } from '@/constants';
import { width, height } from '@/constants/Dimensions';

type CustomButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  IconLeft?: () => React.ReactNode;
  IconRight?: () => React.ReactNode;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  style = {},
  textStyle = {},
  IconLeft,
  IconRight,
}) => {
  const theme = useColorScheme() === 'dark' ? DarkColors : LightColors;

  return (
    <TouchableOpacity
      style={[styles.button, style, { backgroundColor: theme.black }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {IconLeft && <View>{IconLeft()}</View>}
      <Text style={[styles.buttonText, textStyle, { color: theme.white }]}>{title}</Text>
      {IconRight && <View>{IconRight()}</View>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: width * 0.8,
    borderWidth: 1,
    borderRadius: width * 0.1,
    padding: width * 0.04,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: height * 0.025,
  },
  buttonText: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    fontFamily: FONTS.bold,
  },
});

export default CustomButton;
