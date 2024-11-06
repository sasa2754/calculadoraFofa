import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export type IButton = {
  width: number;
  height: number;
  color: string;
  text: string;
  colorText: string;
};

export function Button({ width, height, color, text, colorText }: IButton) {

    const buttonStyle = {
    width: width,   
    height: height, 
    backgroundColor: color, 
  };

  const textStyle = {
    color: colorText,
    fontSize: 16, 
  };

  return (
    <View style={[styles.button, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },


  text: {
    fontWeight: 'bold', 
  },
});
