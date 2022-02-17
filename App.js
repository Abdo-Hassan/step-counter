import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { primaryColor } from './constants/Theme';
import { Pedometer } from 'expo-sensors';

export default function App() {
  const [PedometerAvailability, setPedometerAvailability] = useState('');
  const [stepCount, setStepCount] = useState(0);

  // useEffect(() => {
  //   Pedometer.isAvailableAsync()
  //     .then((result) => setPedometerAvailability(String(result)))
  //     .catch((error) => setPedometerAvailability(error));
  // }, []);

  useEffect(() => {
    console.log('mmmmmmmmmm');
    Pedometer.watchStepCount((result) => {
      console.log('~ result.steps', result.steps);
      console.log('~ steps', result.steps);
      setStepCount(result.steps);
    });
  }, []);

  // useEffect(() => {
  //   if (PedometerAvailability) {
  //     Pedometer.watchStepCount((result) => setStepCount(result.steps));
  //   }
  // }, [PedometerAvailability]);

  return (
    <>
      <StatusBar style='auto' />
      <ImageBackground
        style={{ flex: 1 }}
        resizeMode='cover'
        source={require('./assets/running.jpg')}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          {/* <Text style={styles.header}>
            Is Pedometer available on the device : {PedometerAvailability}
          </Text> */}
          <Text style={{ color: '#fff', fontSize: 30, alignSelf: 'center' }}>
            step Count : {stepCount}
          </Text>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    color: '#fff',
    backgroundColor: primaryColor,
    alignSelf: 'center',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
