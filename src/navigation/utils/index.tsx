import {
  createNavigationContainerRef,
  DrawerActions,
  StackActions,
} from '@react-navigation/native';

import {RootNavigatorParamList} from '../typings';

export const navigationRef =
  createNavigationContainerRef<RootNavigatorParamList>();

export function navigate(
  name: keyof RootNavigatorParamList,
  params?: RootNavigatorParamList[keyof RootNavigatorParamList],
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function replace(name: keyof RootNavigatorParamList, params?: object) {
  navigationRef.dispatch(StackActions.replace(name, params));
}

export function popToTop() {
  navigationRef.dispatch(StackActions.popToTop());
}

export function pop(position: number = 1) {
  navigationRef.dispatch(StackActions.pop(position));
}

export function goBack() {
  navigationRef.goBack();
}

export function setRoot(name: keyof RootNavigatorParamList, params = {}) {
  navigationRef.reset({
    index: 0,
    routes: [
      {
        name,
        params,
      },
    ],
  });
}

export function getCurrentRoute() {
  return navigationRef.getCurrentRoute()?.name;
}

export function pushToPage(name: string, params?: object): void {
  navigationRef.current?.dispatch(StackActions.push(name, params));
}

export function openDrawer(): void {
  navigationRef.current?.dispatch(DrawerActions.openDrawer());
}
export function closeDrawer(): void {
  navigationRef.current?.dispatch(DrawerActions.closeDrawer());
}
export function toggleDrawer(): void {
  navigationRef.current?.dispatch(DrawerActions.toggleDrawer());
}
