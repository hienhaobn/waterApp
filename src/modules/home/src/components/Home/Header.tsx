import Images from '@assets/images';
import Svgs from '@assets/svgs';
import {TextBold, TextMedium} from '@components/Text';
import {Sizes} from '@modules/themes';
import Colors from '@modules/themes/colors';
import {scale} from '@modules/themes/responsive';
import {openDrawer} from '@navigation/utils';
import {useDrawerStatus} from '@react-navigation/drawer';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HomeHeader = (): React.ReactElement => {
  const isHomeDrawerOpen = useDrawerStatus() === 'open';
  const onPressLeft = () => {
    if (!isHomeDrawerOpen) {
      openDrawer();
    }
  };

  return (
    <LinearGradient
      colors={[Colors.main2, Colors.main3]}
      style={styles.headerContainer}>
      <View style={styles.content}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.leftContainer}
          onPress={onPressLeft}>
          <Image source={Images.DEFAULT_AVATAR} style={styles.avatar} />
          <View style={styles.textContainer}>
            <TextBold style={styles.textCompany}>Duy Anh</TextBold>
            <TouchableOpacity activeOpacity={0.9}>
              <TextMedium style={styles.textInfoCompany}>
                Thông tin nhà máy
              </TextMedium>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <View style={styles.rightContainer}>
          <TouchableOpacity style={styles.contentRight} activeOpacity={0.8}>
            <Svgs.IcHomeSearch />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <Svgs.IcHomeMessage />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: Sizes.statusBarHeight + scale(12),
    height: Sizes.statusBarHeight + scale(60),
  },
  content: {
    marginHorizontal: scale(12),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  leftContainer: {
    flexDirection: 'row',
  },
  textContainer: {
    marginLeft: scale(8),
  },
  avatar: {
    width: scale(40),
    height: scale(40),
    borderRadius: 100,
  },
  textCompany: {
    color: Colors.white,
    fontSize: scale(16),
  },
  textInfoCompany: {
    color: Colors.gray6,
    fontSize: scale(11),
    marginTop: scale(4),
  },
  rightContainer: {
    flexDirection: 'row',
  },
  contentRight: {
    marginRight: scale(14),
  },
});
