import {scale} from '@modules/themes/responsive';
import Colors from 'modules/themes/colors';
import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';

type TextSemiboldProps = {
  children: string;
  style?: TextStyle;
};

const TextSemibold = ({
  children,
  style,
}: TextSemiboldProps): React.ReactNode => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default TextSemibold;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'SFProText-Semibold',
    fontSize: scale(12),
    color: Colors.textColor,
  },
});
