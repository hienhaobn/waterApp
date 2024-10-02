import AsyncStorage from '@react-native-async-storage/async-storage';
import {ThemeColor} from 'modules/themes/colors';

export enum StorageKey {
  Theme = 'water_theme',
  LastEmailLogin = 'water_last_email_login',
}

type StorageValue = ThemeColor | string;

const getString = async (key: StorageKey) => {
  try {
    return (await AsyncStorage.getItem(key)) || undefined;
  } catch (error) {
    console.log(`Error get string in Async Storage with key: ${key}: `, error);
    return undefined;
  }
};

const getObject = async (key: StorageKey): Promise<object | undefined> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);

    return (jsonValue && JSON.parse(jsonValue)) || undefined;
  } catch (error) {
    console.log(`Error get object in Async Storage with key: ${key}: `, error);
    return undefined;
  }
};

const setString = async (key: StorageKey, value: StorageValue) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(`Error set string in Async Storage with key: ${key}: `, error);
  }
};

const setObject = async (key: StorageKey, value: StorageValue) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.log(`Error set object in Async Storage with key: ${key}: `, error);
  }
};

const remove = async (key: StorageKey) => {
  try {
  } catch (error) {
    console.log(`Error remove data in Async Storage with key: ${key}: `, error);
  }
};

const Storages = {
  getString,
  getObject,
  setString,
  setObject,
  remove,
};

export default Storages;
