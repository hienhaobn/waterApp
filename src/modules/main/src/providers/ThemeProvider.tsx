import {ThemeColor} from '@modules/themes/colors';
import React, {createContext, useContext, useEffect, useState} from 'react';
import Storages, {StorageKey} from '@utils/storages';

interface IThemeProviderProps {
  children: React.ReactNode;
}
export interface IThemeContext {
  theme: ThemeColor;
  onSwitchTheme: () => void;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);
export const useMyTheme = () => useContext(ThemeContext);

function ThemeProvider({children}: IThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeColor>(ThemeColor.Light);
  // get theme in async storage
  const initTheme = async () => {
    const value = (await Storages.getString(StorageKey.Theme)) as ThemeColor;
    setTheme(value || ThemeColor.Light);
  };

  useEffect(() => {
    initTheme();
  }, []);

  const onSwitchTheme = async () => {
    // set theme in async storage
    const isDark = theme === ThemeColor.Dark;
    try {
      if (isDark) {
        setTheme(ThemeColor.Light);
        await Storages.setString(StorageKey.Theme, ThemeColor.Light);
      } else {
        setTheme(ThemeColor.Dark);
        await Storages.setString(StorageKey.Theme, ThemeColor.Dark);
      }
    } catch (error) {
      await Storages.remove(StorageKey.Theme);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        onSwitchTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
