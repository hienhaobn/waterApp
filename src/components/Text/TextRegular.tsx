import {scale} from '@modules/themes/responsive';
import Colors from 'modules/themes/colors';
import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';

type TextRegularProps = {
  children: string;
  style?: TextStyle;
};

const TextRegular = ({children, style}: TextRegularProps): React.ReactNode => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default TextRegular;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'SFProText-Regular',
    fontSize: scale(12),
    color: Colors.textColor,
  },
});
