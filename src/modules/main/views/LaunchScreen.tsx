import Images from '@assets/images';
import {setRoot} from '@navigation/utils';
import React, {useEffect} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

function LaunchScreen() {
  useEffect(() => {
    SplashScreen.hide();
    setTimeout(() => {
      setRoot('Main');
    }, 500);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={Images.LAUNCH} style={styles.img} />
    </View>
  );
}

export default LaunchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    flex: 1,
    width: Dimensions.get('window').width,
    resizeMode: 'stretch',
  },
});
