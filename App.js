/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import stylesContainer from './styling/container'

const URL_LOCAL = "./img/bg.png";
const ICON_SCAN = "./img/Scan.png"

const App = () => {
  const onSuccess = e => {
    console.log(e);
  };
  return (
    <View style={stylesContainer.container}>
      <ImageBackground source={require(URL_LOCAL)} style={stylesContainer.imgBackground}>
        <View style={stylesContainer.box1}>
          <View style={stylesContainer.containerLogoScan}>
            <Image
              style={stylesContainer.tinyLogo}
              source={require(ICON_SCAN)}
            />
            <Text style={stylesContainer.textLogoScan}>Follow the arrow to scan card</Text>
          </View>
        </View>
        <View style={stylesContainer.content}>
          <QRCodeScanner
            onRead={onSuccess}
            cameraType='front'
            cameraStyle={{ width: 100, height: 100 }}
            flashMode={RNCamera.Constants.FlashMode.off}
            containerStyle={{ alignItems: "center" }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});

export default App;
