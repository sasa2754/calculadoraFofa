import React from 'react';
import { Text, View, StyleSheet, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export type IButton = {
  width: number;
  height: number;
  color: string;
  text: string;
  colorText: string;
  onPress: (text: string) => void;
};

export function Button({ width, height, color, text, colorText, onPress }: IButton) {

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

    <TouchableOpacity onPress={() => onPress(text)}>
        <View style={[styles.button, buttonStyle]}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
        </View>
    </TouchableOpacity>
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
