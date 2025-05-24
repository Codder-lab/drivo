import { useAuth } from '@clerk/clerk-expo';
import { Redirect } from 'expo-router';

const Index = () => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return null; // or splash/loading component
  }

  if (isSignedIn) {
    return <Redirect href="/(root)/(tabs)/Home" />;
  }

  return <Redirect href="/(root)/(auth)/Welcome" />;
};

export default Index;
