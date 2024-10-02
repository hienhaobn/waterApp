import {scale} from '@modules/themes/responsive';
import Colors from 'modules/themes/colors';
import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';

type TextRegularItalicProps = {
  children: string;
  style?: TextStyle;
};

const TextRegularItalic = ({
  children,
  style,
}: TextRegularItalicProps): React.ReactNode => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default TextRegularItalic;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'SFProText-RegularItalic',
    fontSize: scale(12),
    color: Colors.textColor,
  },
});
