import {scale} from '@modules/themes/responsive';
import Colors from 'modules/themes/colors';
import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';

type TextMediumProps = {
  children: string;
  style?: TextStyle;
};

const TextMedium = ({children, style}: TextMediumProps): React.ReactNode => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default TextMedium;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'SFProText-Medium',
    fontSize: scale(12),
    color: Colors.textColor,
  },
});
