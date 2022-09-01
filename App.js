import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function HelloWorld() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Hello World!!!!!!</Text>
      <Text>Extra line</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 50,
  },
});

//branch B line
