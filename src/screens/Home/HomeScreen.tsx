import React from 'react';
import {View, Text, Pressable} from 'react-native';

export const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Pressable>
        <Text>Go to Motion Detail screen</Text>
      </Pressable>
    </View>
  );
};
