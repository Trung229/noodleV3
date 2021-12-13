/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
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
import stylesContainer from '../../styling/container'
import Video from 'react-native-video';
import {URL_LOCAL, ICON_SCAN, VIDEO, WELCOME, LOGO, RIGHT_ARROW } from '../../src/utils/constant'



const Welcome = ({navigation}) => {
    const onSuccess = async (e) => {
        if(e.data){
            navigation.navigate('Info',{id:e.data})
        }
      };
      const onBuffer = () => {
    
      }
      const videoError = () => {
    
      }
      const [isPause, setIsPaused] = useState(false);
    return(
        <View style={stylesContainer.container}>
        <ImageBackground source={URL_LOCAL} style={stylesContainer.imgBackground}>
          <View style={stylesContainer.box1}>
            <View style={stylesContainer.containerWelcome}>
              <Image resizeMode="contain" style={{ width: 100, height: 100 }} source={LOGO} />
              <Image resizeMode="contain" style={{ width: 300, height: 20 }} source={WELCOME} />
              <View style={stylesContainer.boxOutside}>
                <Video source={VIDEO}
                  controls
                  paused={isPause}
                  repeat
                  hideShutterView={false}
                  resizeMode="stretch"
                  onBuffer={onBuffer}
                  onError={videoError}
                  onLoad={() => {
                    setIsPaused(!isPause);
                  }}
                  style={stylesContainer.backgroundVideo} />
              </View>
            </View>
            <View style={stylesContainer.containerLogoScan}>
              <Image
                style={stylesContainer.tinyLogo}
                source={ICON_SCAN}
              />
              <Text style={stylesContainer.textLogoScan}>Follow the arrow to scan card</Text>
            </View>
          </View>
          <View style={stylesContainer.content}>
            <QRCodeScanner
              ref={(node) => {
                  if(node){
                    node.reactivate()
                  }
              }}
              onRead={onSuccess}
              cameraType='back'
              cameraStyle={{ width: 100, height: 100 }}
              flashMode={RNCamera.Constants.FlashMode.off}
              containerStyle={{ alignItems: "center" }}
            />
          </View>
          <Image resizeMode="contain" style={{position: "absolute", width: 50, height: 50, bottom:"10%", right:20}} source={RIGHT_ARROW}/>
        </ImageBackground>
      </View>
    )
}
export default Welcome;