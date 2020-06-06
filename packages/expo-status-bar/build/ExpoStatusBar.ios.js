import React from 'react';
import { useColorScheme, StatusBar } from 'react-native';
export default function ExpoStatusBar(props) {
    let { barStyle, ...otherProps } = props;
    // If useColorScheme isn't defined, then this is an old version of React Native
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const colorScheme = useColorScheme ? useColorScheme() : 'light';
    // Pick appropriate 'default' depending on current theme, so if we are locked to light mode
    // we don't end up with a light status bar
    if (props.barStyle === 'default') {
        barStyle = colorScheme === 'light' ? 'dark-content' : 'light-content';
    }
    return React.createElement(StatusBar, Object.assign({ barStyle: barStyle }, otherProps));
}
//# sourceMappingURL=ExpoStatusBar.ios.js.map