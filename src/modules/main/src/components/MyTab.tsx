import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {scale} from 'modules/themes/responsive';
import Svgs from '@assets/svgs';
import {Sizes} from '@modules/themes';
import Colors, {ThemeColor} from 'modules/themes/colors';
import {useMyTheme} from '../providers/ThemeProvider';

function MyTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  const {theme} = useMyTheme();
  const styles = myStyles(theme);
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options.title !== undefined ? options.title : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        // const onLongPress = () => {
        //   navigation.emit({
        //     type: 'tabLongPress',
        //     target: route.key,
        //   });
        //   navigation.navigate(route.name, route.params);
        // };

        const field = `Ic${route.name}${
          isFocused ? 'Active' : 'Inactive'
        }` as keyof typeof Svgs;
        const IconTab = Svgs[field];

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            // onLongPress={onLongPress}
            style={styles.btnContainer}>
            <IconTab width={scale(21)} height={scale(21)} />
            <Text
              style={[
                {
                  color: isFocused ? Colors.main : Colors[theme].textTabBar,
                },
                styles.textTab,
              ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default MyTabBar;

const myStyles = (theme: ThemeColor) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      height: Sizes.bottomSpace + scale(60),
      paddingBottom: Sizes.bottomSpace,
      backgroundColor: '#FFFF',
      shadowColor: Colors[theme].textColorOpacity50,
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 20,
    },
    btnContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingBottom: scale(5),
    },
    textTab: {
      // TODO: font family
      paddingTop: scale(5),
      fontSize: scale(11),
    },
  });
