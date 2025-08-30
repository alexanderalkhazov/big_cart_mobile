import React, { useEffect, useState } from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import SplashScreen from './src/screens/SplashScreen';

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAppReady(true);
    }, 3000); 
  }, []);

  if (!isAppReady) {
    return <SplashScreen />;
  }

  return <AppNavigator />;
}