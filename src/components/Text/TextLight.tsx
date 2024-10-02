import {scale} from '@modules/themes/responsive';
import Colors from 'modules/themes/colors';
import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';

type TextLightProps = {
  children: string;
  style?: TextStyle;
};

const TextLight = ({children, style}: TextLightProps): React.ReactNode => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default TextLight;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'SFProText-Light',
    fontSize: scale(12),
    color: Colors.textColor,
  },
});
