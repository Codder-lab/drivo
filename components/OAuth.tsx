import { LightColors, DarkColors, FONTS, icons } from '@/constants';
import { View, StyleSheet, Text, Image, useColorScheme } from 'react-native';
import { width, height } from '@/constants/Dimensions';
import CustomButton from './CustomButton';

const OAuth = () => {
    const handleGoogleSignIn = async () => {};
    const theme = useColorScheme() === 'dark' ? DarkColors : LightColors;

  return (
    <View>
      <View style={styles.container}>
        <View style={[styles.authContainer, { backgroundColor: theme.gray }]} />
        <Text style={[styles.authText, { color: theme.black }]}>OR</Text>
        <View style={[styles.authContainer, { backgroundColor: theme.gray }]} />
      </View>

      <CustomButton
        title="Sign In With Google"
        style={[styles.customButton, { backgroundColor: theme.black }]}
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            style={styles.icon}
          />
        )}
        onPress={handleGoogleSignIn}
      />
    </View>
  );
};

export default OAuth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.001,
    rowGap: height * 0.005,
  },
  authContainer: {
    flex: 1,
    height: height * 0.001,
    marginHorizontal: width * 0.03,
  },
  authText: {
    fontSize: width * 0.04,
    fontFamily: FONTS.semiBold,
  },
  customButton: {
    width: '100%',
    marginTop: height * 0.03,
    shadowColor: '#000',
  },
  icon: {
    width: 15,
    height: 15,
    marginHorizontal: 10,
  },
});
