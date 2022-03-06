import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { height } from '../helpers/Index';
import Styles from '../helpers/Styles';

const Button = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      {...props}
      style={[styles.button, {...props.style}]}>
      <Text style={Styles.text('#333', 1.8)}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 46,
    alignSelf: 'center',
    borderRadius: 50,
    backgroundColor: '#fff',
    elevation: 2,
    width:'85%',
    marginVertical: height(3)
  },
});
