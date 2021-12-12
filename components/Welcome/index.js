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

const URL_LOCAL = "../../assets/img/bg.png";
const ICON_SCAN = "../../assets/img/Scan.png"
const VIDEO = "../../assets/video/video1.mp4"
const WELCOME = "../../assets/img/welcome.png"
const LOGO = "../../assets/img/logo.png"
const RIGHT_ARROW = "../../assets/img/rightArrow.png"

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
        <ImageBackground source={require(URL_LOCAL)} style={stylesContainer.imgBackground}>
          <View style={stylesContainer.box1}>
            <View style={stylesContainer.containerWelcome}>
              <Image resizeMode="contain" style={{ width: 100, height: 100 }} source={require(LOGO)} />
              <Image resizeMode="contain" style={{ width: 300, height: 20 }} source={require(WELCOME)} />
              <View style={stylesContainer.boxOutside}>
                <Video source={require(VIDEO)}
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
                source={require(ICON_SCAN)}
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
          <Image resizeMode="contain" style={{position: "absolute", width: 50, height: 50, bottom:"10%", right:20}} source={require(RIGHT_ARROW)}/>
        </ImageBackground>
      </View>
    )
}
export default Welcome;