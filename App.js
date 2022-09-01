import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function HelloWorld() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!!!!!!</Text>
      <Text>Extra line</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  text: {
    fontSize: 30,
  },
});

//branch B line
