import { icons } from '@/constants';
import { Tabs } from 'expo-router';
import { Image, View, StyleSheet, ImageSourcePropType } from 'react-native';
import { width, height } from '@/constants/Dimensions';

const TabIcon = ({
  focused,
  source,
}: {
  focused: boolean;
  source: ImageSourcePropType;
}) => {
  return (
    <View style={[styles.tabContainer, focused && styles.outerCircleFocused]}>
      <View style={[styles.innerCircle, focused && styles.innerCircleFocused]}>
        <Image source={source} resizeMode="contain" style={styles.icon} />
      </View>
    </View>
  );
};

const Layout = () => (
  <Tabs
    initialRouteName="Home"
    screenOptions={{
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'white',
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: '#333333',
        borderRadius: width * 0.1,
        paddingBottom: 0,
        overflow: 'hidden',
        //marginHorizontal: 20,
        marginHorizontal: width * 0.06,
        marginBottom: width * 0.06,
        height: width * 0.2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
      },
    }}
  >
    <Tabs.Screen
      name="Home"
      options={{
        title: 'Home',
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.home} />
        ),
      }}
    />
    <Tabs.Screen
      name="Rides"
      options={{
        title: 'Rides',
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.list} />
        ),
      }}
    />
    <Tabs.Screen
      name="Message"
      options={{
        title: 'Chat',
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.chat} />
        ),
      }}
    />
    <Tabs.Screen
      name="Profile"
      options={{
        title: 'Profile',
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.profile} />
        ),
      }}
    />
  </Tabs>
);

export default Layout;

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.08,
    marginBottom: width * 0.08,
  },
  outerCircleFocused: {
    backgroundColor: '#D1D5DB',
  },
  innerCircle: {
    width: width * 0.13,
    height: width * 0.13,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.08,
  },
  innerCircleFocused: {
    backgroundColor: '#9CA3AF',
  },
  icon: {
    width: width * 0.08,
    height: width * 0.08,
    tintColor: 'white',
  },
});
