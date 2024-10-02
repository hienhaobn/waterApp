import {TextMedium, TextSemibold} from '@components/Text';
import ViewWrap from '@components/ViewWrap';
import Colors from '@modules/themes/colors';
import {scale} from '@modules/themes/responsive';
import {HomeDrawerParamsList} from '@navigation/typings';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Svgs from 'assets/svgs';
import {Sizes} from 'modules/themes';
import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import HomeHeader from '../src/components/Home/Header';

export type HomeScreenProps = NativeStackScreenProps<
  HomeDrawerParamsList,
  'HomeScreen'
>;

function HomeScreen(): React.ReactElement {
  const renderListHeaderComponent = () => (
    <View style={styles.contentContainer}>
      <View style={styles.backspace}></View>
    </View>
  );

  return (
    <ViewWrap>
      <HomeHeader />
      <FlatList
        data={[0]}
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: Colors.main3}}
        ListHeaderComponent={renderListHeaderComponent}
        renderItem={() => {
          return (
            <View style={styles.content}>
              <View
                style={{
                  backgroundColor: 'white',
                  marginHorizontal: scale(12),
                  position: 'absolute',
                  borderRadius: scale(8),
                  width: Sizes.scrWidth - scale(24),
                  padding: scale(12),
                  top: scale(-90),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <TextSemibold
                      style={{fontSize: scale(11), color: Colors.textGray}}>
                      Tháng này
                    </TextSemibold>
                    <TouchableOpacity
                      activeOpacity={0.9}
                      style={{marginLeft: scale(4)}}>
                      <Svgs.IcHomeEyesShow height={scale(14)} />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TextMedium
                      style={{fontSize: scale(11), color: Colors.blue1}}>
                      Xem lãi lỗ
                    </TextMedium>
                    <Svgs.IcHomeArrow />
                  </TouchableOpacity>
                </View>
                <FlatList
                  data={[0]}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={() => {
                    return (
                      <View style={{flexDirection: 'row'}}>
                        <View
                          style={{
                            width: scale(120),
                            height: scale(60),
                          }}>
                          <TextMedium>Doanh thu</TextMedium>
                          <TextSemibold>100</TextSemibold>
                        </View>
                        <View
                          style={{
                            width: scale(120),
                            height: scale(60),
                          }}>
                          <TextMedium>Đồng hồ</TextMedium>
                          <TextSemibold>100</TextSemibold>
                        </View>
                        <View
                          style={{
                            width: scale(120),
                            height: scale(60),
                          }}>
                          <TextMedium>Lợi nhuận</TextMedium>
                          <TextSemibold>100</TextSemibold>
                        </View>
                      </View>
                    );
                  }}
                />
              </View>
              <View
                style={{paddingTop: scale(30), marginHorizontal: scale(12)}}>
                <Text>
                  Explanation: We call reduce() on the arr array. Inside the
                  callback function ((acc, current) ...): acc (accumulator)
                  represents the array being built (initially an empty array
                  []). current is the current object being processed from arr.
                  We use the concat() method to merge the mintPages array from
                  the current object with the acc array. The result of concat()
                  is returned, which becomes the new acc for the next iteration.
                  After all iterations, reduce() returns the final combined
                  mintPages array. Method 2: Using flatMap() The flatMap()
                  method is a more concise approach available in modern
                  JavaScript environments. It combines the functionality of
                  map() (creating a new array) and concat() (flattening nested
                  arrays) into a single step. Here's how to use it: Explanation:
                  We call reduce() on the arr array. Inside the callback
                  function ((acc, current) ...): acc (accumulator) represents
                  the array being built (initially an empty array []). current
                  is the current object being processed from arr. We use the
                  concat() method to merge the mintPages array from the current
                  object with the acc array. The result of concat() is returned,
                  which becomes the new acc for the next iteration. After all
                  iterations, reduce() returns the final combined mintPages
                  array. Method 2: Using flatMap() The flatMap() method is a
                  more concise approach available in modern JavaScript
                  environments. It combines the functionality of map() (creating
                  a new array) and concat() (flattening nested arrays) into a
                  single step. Here's how to use it: Explanation: We call
                  reduce() on the arr array. Inside the callback function ((acc,
                  current) ...): acc (accumulator) represents the array being
                  built (initially an empty array []). current is the current
                  object being processed from arr. We use the concat() method to
                  merge the mintPages array from the current object with the acc
                  array. The result of concat() is returned, which becomes the
                  new acc for the next iteration. After all iterations, reduce()
                  returns the final combined mintPages array. Method 2: Using
                  flatMap() The flatMap() method is a more concise approach
                  available in modern JavaScript environments. It combines the
                  functionality of map() (creating a new array) and concat()
                  (flattening nested arrays) into a single step. Here's how to
                  use it: Explanation: We call reduce() on the arr array. Inside
                  the callback function ((acc, current) ...): acc (accumulator)
                  represents the array being built (initially an empty array
                  []). current is the current object being processed from arr.
                  We use the concat() method to merge the mintPages array from
                  the current object with the acc array. The result of concat()
                  is returned, which becomes the new acc for the next iteration.
                  After all iterations, reduce() returns the final combined
                  mintPages array. Method 2: Using flatMap() The flatMap()
                  method is a more concise approach available in modern
                  JavaScript environments. It combines the functionality of
                  map() (creating a new array) and concat() (flattening nested
                  arrays) into a single step. Here's how to use it: Explanation:
                  We call reduce() on the arr array. Inside the callback
                  function ((acc, current) ...): acc (accumulator) represents
                  the array being built (initially an empty array []). current
                  is the current object being processed from arr. We use the
                  concat() method to merge the mintPages array from the current
                  object with the acc array. The result of concat() is returned,
                  which becomes the new acc for the next iteration. After all
                  iterations, reduce() returns the final combined mintPages
                  array. Method 2: Using flatMap() The flatMap() method is a
                  more concise approach available in modern JavaScript
                  environments. It combines the functionality of map() (creating
                  a new array) and concat() (flattening nested arrays) into a
                  single step. Here's how to use it: Explanation: We call
                  reduce() on the arr array. Inside the callback function ((acc,
                  current) ...): acc (accumulator) represents the array being
                  built (initially an empty array []). current is the current
                  object being processed from arr. We use the concat() method to
                  merge the mintPages array from the current object with the acc
                  array. The result of concat() is returned, which becomes the
                  new acc for the next iteration. After all iterations, reduce()
                  returns the final combined mintPages array. Method 2: Using
                  flatMap() The flatMap() method is a more concise approach
                  available in modern JavaScript environments. It combines the
                  functionality of map() (creating a new array) and concat()
                  (flattening nested arrays) into a single step. Here's how to
                  use it:
                </Text>
              </View>
            </View>
          );
        }}
      />
    </ViewWrap>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.gray2,
  },
  backspace: {
    backgroundColor: Colors.main3,
    height: scale(90),
    borderBottomLeftRadius: scale(90),
    borderBottomRightRadius: scale(90),
    position: 'relative',
  },
  content: {
    backgroundColor: Colors.gray2,
  },
});
