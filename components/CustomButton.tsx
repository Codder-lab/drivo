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
      style={[styles.button, style, { backgroundColor: theme.primary }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {IconLeft && <View>{IconLeft()}</View>}
      <Text style={[styles.buttonText, textStyle, { color: theme.textPrimary }]}>{title}</Text>
      {IconRight && <View>{IconRight()}</View>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: width * 0.8,
    borderRadius: width * 0.1,
    padding: width * 0.04,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 3,
    //backgroundColor: COLORS.primary,
    marginBottom: height * 0.025,
  },
  buttonText: {
    //color: COLORS.white,
    fontSize: width * 0.04,
    fontWeight: 'bold',
    fontFamily: FONTS.bold,
  },
});

export default CustomButton;
