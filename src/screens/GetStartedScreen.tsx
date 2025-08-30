import React from 'react';
import { View, Button } from 'react-native';

const GetStartedScreen = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Get Started" onPress={() => navigation.navigate('Onboarding')} />
    </View>
  );
};

export default GetStartedScreen;
