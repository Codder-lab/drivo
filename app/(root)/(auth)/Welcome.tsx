import { onboarding } from '@/constants';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  useColorScheme,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import { LightColors, DarkColors, FONTS } from '@/constants';
import { width, height } from '@/constants/Dimensions';
import CustomButton from '@/components/CustomButton';

const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isLastSlide = currentIndex === onboarding.length - 1;
  const theme = useColorScheme() === 'dark' ? DarkColors : LightColors;

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <TouchableOpacity
        onPress={() => {
          router.replace('/(root)/(auth)/Signup');
        }}
        style={styles.skipBtn}
      >
        <Text style={[styles.textBtn, { color: theme.black }]}>Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View style={[styles.dot, { backgroundColor: theme.grayMedium }]} />
        }
        activeDot={
          <View style={[styles.activeDot, { backgroundColor: theme.black }]} />
        }
        onIndexChanged={(index) => setCurrentIndex(index)}
      >
        {onboarding.map((item) => (
          <View key={item.id} style={styles.onboardingContainer}>
            <Image source={item.image} style={styles.onboardingImage} />
            <View style={styles.onboardingTextContainer}>
              <Text style={[styles.onboardingText, { color: theme.black }]}>
                {item.title}
              </Text>
            </View>
            <Text
              style={[styles.onboardingDescription, { color: theme.grayText }]}
            >
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      <CustomButton
        title={isLastSlide ? 'Get Started' : 'Next'}
        onPress={() => {
          if (isLastSlide) {
            router.replace('/(root)/(auth)/Signup');
          } else {
            swiperRef.current?.scrollBy(1);
          }
        }}
      />
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: height * 1,
  },
  skipBtn: {
    alignItems: 'flex-end',
    padding: width * 0.08,
    position: 'absolute',
    top: width * 0.045,
    right: 0,
    zIndex: 1,
  },
  textBtn: {
    fontSize: width * 0.038,
    fontFamily: FONTS.bold,
  },
  dot: {
    width: width * 0.08,
    height: height * 0.005,
    marginHorizontal: 1,
    borderRadius: 999,
  },
  activeDot: {
    width: width * 0.08,
    height: height * 0.005,
    marginHorizontal: 1,
    borderRadius: width * 0.08,
  },
  onboardingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: width * 0.01,
  },
  onboardingImage: {
    marginTop: width * 0.25,
    width: width * 0.82,
    height: height * 0.34,
    resizeMode: 'contain',
  },
  onboardingTextContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: width * 0.9,
    marginTop: width * 0.01,
  },
  onboardingText: {
    fontSize: width * 0.065,
    fontFamily: FONTS.bold,
    marginHorizontal: width * 0.07,
    textAlign: 'center',
  },
  onboardingDescription: {
    fontSize: width * 0.04,
    fontFamily: FONTS.semiBold,
    textAlign: 'center',
    marginHorizontal: width * 0.07,
    marginBottom: height * 0.22,
  },
});
