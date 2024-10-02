import Colors from '@modules/themes/colors';
import React from 'react';
import {StyleSheet, View} from 'react-native';

interface IViewWrapProps {
  children: React.ReactNode;
}

function ViewWrap({children}: IViewWrapProps) {
  return <View style={styles.container}>{children}</View>;
}

export default ViewWrap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray2,
  },
});
