import arrowDown from '@/assets/icons/arrow-down.png';
import arrowUp from '@/assets/icons/arrow-up.png';
import backArrow from '@/assets/icons/back-arrow.png';
import chat from '@/assets/icons/chat.png';
import checkmark from '@/assets/icons/check.png';
import close from '@/assets/icons/close.png';
import dollar from '@/assets/icons/dollar.png';
import email from '@/assets/icons/email.png';
import eyecross from '@/assets/icons/eyecross.png';
import google from '@/assets/icons/google.png';
import home from '@/assets/icons/home.png';
import list from '@/assets/icons/list.png';
import lock from '@/assets/icons/lock.png';
import map from '@/assets/icons/map.png';
import marker from '@/assets/icons/marker.png';
import out from '@/assets/icons/out.png';
import person from '@/assets/icons/person.png';
import pin from '@/assets/icons/pin.png';
import profile from '@/assets/icons/profile.png';
import search from '@/assets/icons/search.png';
import selectedMarker from '@/assets/icons/selected-marker.png';
import star from '@/assets/icons/star.png';
import target from '@/assets/icons/target.png';
import check from '@/assets/images/check.png';
import getStarted from '@/assets/images/get-started.png';
import message from '@/assets/images/message.png';
import noResult from '@/assets/images/no-result.png';
import onboarding1 from '@/assets/images/onboarding1.png';
import onboarding2 from '@/assets/images/onboarding2.png';
import onboarding3 from '@/assets/images/onboarding3.png';
import carDark from '@/assets/images/car-dark.png';
import carLight from '@/assets/images/car-light.png';
import toLight from '@/assets/icons/to_light.png';
import toDark from '@/assets/icons/to_dark.png';
import pointLight from '@/assets/icons/point_light.png';
import pointDark from '@/assets/icons/point_dark.png';

export const images = {
  onboarding1,
  onboarding2,
  onboarding3,
  getStarted,
  signUpCar: carLight,
  signUpCarDark: carDark,
  check,
  noResult,
  message,
};

export const icons = {
  arrowDown,
  arrowUp,
  backArrow,
  chat,
  checkmark,
  close,
  dollar,
  email,
  eyecross,
  google,
  home,
  list,
  lock,
  map,
  marker,
  out,
  person,
  pin,
  profile,
  search,
  selectedMarker,
  star,
  target,
  toDark,
  toLight,
  pointLight,
  pointDark
};

export const onboarding = [
  {
    id: 1,
    title: 'The perfect ride is just a tap away!',
    description:
      'Your journey begins with Drivo. Find your ideal ride effortlessly.',
    image: images.onboarding1,
  },
  {
    id: 2,
    title: 'Best car in your hands with Drivo',
    description:
      'Discover the convenience of finding your perfect ride with Drivo',
    image: images.onboarding2,
  },
  {
    id: 3,
    title: "Your ride, your way. Let's go!",
    description:
      'Enter your destination, sit back, and let us take care of the rest.',
    image: images.onboarding3,
  },
];

export const data = {
  onboarding,
};

// Color schemes
export const LightColors = {
  primary: '#0286FF',
  background: '#FFFFFF',
  card: '#F9F9F9',
  gray: '#6B7280',
  grayMedium: '#D1D5DB',
  grayLight: '#F3F4F6',
  danger: '#EF4444',
  success: '#22C55E',
  outlineBorder: '#D1D5DB',
  textPrimary: '#000000',
  textSecondary: '#6B7280',
  textDanger: '#f50707',
  textSuccess: '#02c244',
  textDefault: '#000000',
  grayText: '#858585',
  white: '#FFFFFF',
  black: '#000000',
  transparent: '#00000000',
  lightBlack: '#F3F4F6',
};

// Dark mode color scheme
export const DarkColors = {
  primary: '#66B5FF',
  background: '#121212',
  card: '#161B22',
  gray: '#9CA3AF',
  grayMedium: '#374151',
  grayLight: '#1F2937',
  danger: '#EF4444',
  success: '#22C55E',
  outlineBorder: '#374151',
  textPrimary: '#FFFFFF',
  textSecondary: '#9CA3AF',
  textDanger: '#FCA5A5',
  textSuccess: '#86EFAC',
  textDefault: '#FFFFFF',
  grayText: '#d4cccb',
  white: '#000000',
  black: '#FFFFFF',
  transparent: '#00000000',
  lightBlack: '#454545',
};

// Fonts
export const FONTS = {
  bold: 'Jakarta-Bold',
  extraBold: 'Jakarta-ExtraBold',
  extraLight: 'Jakarta-ExtraLight',
  light: 'Jakarta-Light',
  medium: 'Jakarta-Medium',
  semiBold: 'Jakarta-SemiBold',
  regular: 'Jakarta-Regular',
};
