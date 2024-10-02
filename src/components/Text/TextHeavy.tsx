import {scale} from '@modules/themes/responsive';
import Colors from 'modules/themes/colors';
import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';

type TextHeavyProps = {
  children: string;
  style?: TextStyle;
};

const TextHeavy = ({children, style}: TextHeavyProps): React.ReactNode => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default TextHeavy;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'SFProText-Heavy',
    fontSize: scale(12),
    color: Colors.textColor,
  },
});
