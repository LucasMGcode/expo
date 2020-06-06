import { StatusBar as ReactNativeStatusBar } from 'react-native';

import ExpoStatusBar from '../StatusBar';

describe('StatusBar', () => {
  it('is equivalent to the StatusBar component provided by react-native', () => {
    expect(ExpoStatusBar).toEqual(ReactNativeStatusBar);
  });
});
