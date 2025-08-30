
import React, { useRef } from 'react';
import { View, Text, ScrollView, Dimensions, Button, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const OnboardingScreen = ({ navigation }: any) => {
  const scrollViewRef = useRef<ScrollView>(null);

  const handleNext = (page: number) => {
    if (page < 4) {
      scrollViewRef.current?.scrollTo({ x: width * page, animated: true });
    } else {
      navigation.navigate('Auth');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        {[1, 2, 3, 4].map((page) => (
          <View key={page} style={styles.page}>
            <Text style={styles.text}>Onboarding Page {page}</Text>
            <Button title="Next" onPress={() => handleNext(page)} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default OnboardingScreen;
