import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Sample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
  },
});

export default Sample;
