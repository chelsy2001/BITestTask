
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Signup Screen</Text> 
    </View> 
  );
}
export default SignupScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});