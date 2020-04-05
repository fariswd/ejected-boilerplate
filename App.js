import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

// import useLinking from './src/navigation/useLinking';
import AppContainer from './src/navigation/AppContainer';
import storeConfig from './src/store/storeConfig'

console.disableYellowBox = true;
if (typeof console !== "undefined" && !__DEV__) {
  console.log = () => {};
}

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  // const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
            // TODO: SET Native splash screen
            // https://github.com/expo/expo/tree/master/packages/expo-splash-screen#-configure-android
            // if(SplashScreen){
            //   SplashScreen.preventAutoHideAsync();
            // }

            // Load our initial navigation state
            // setInitialNavigationState(await getInitialState());

            // Load fonts
            await Font.loadAsync({
              ...Ionicons.font,
              Roboto: require("native-base/Fonts/Roboto.ttf"),
              Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
              "space-mono": require("./src/assets/fonts/SpaceMono-Regular.ttf"),
            });
          } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        // if(SplashScreen){
        //   SplashScreen.hideAsync();
        // }
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <Provider store={storeConfig.store}>
        <PersistGate loading={null} persistor={storeConfig.persistor}>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <AppContainer
              containerRef={containerRef}
              initialNavigationState={initialNavigationState}
            />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
