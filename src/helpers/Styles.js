import {StyleSheet} from 'react-native';
import {font} from './Index';

const Styles = StyleSheet.create({
  text: (color, value) => ({
    fontSize: font(value),
    color: color,
  }),
});

export default Styles;
