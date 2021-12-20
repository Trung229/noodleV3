import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

const styleContainer = StyleSheet.create({
    box1:{
        flex:0.7,
        width:"100%",
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    containerWelcome:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center'
    },
    imgBackground: {
        flex: 1,
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
    },
    content: {
        position: "absolute", 
        backgroundColor: 'white',
        width: 130, 
        height: 160, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderWidth: 5, 
        borderColor: 'white', 
        bottom: 0, 
        marginBottom: 20, 
        borderRadius: 20
    },
    tinyLogo:{
        width:40,
        height:40
    },
    textLogoScan:{
        fontSize:20,
        fontWeight: '800',
        color:"#AE0808",
        marginLeft:5
    },
    containerLogoScan:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    backgroundVideo: {
        width: "100%", 
        height:"100%",
        display: "flex",
        position: 'absolute',
        borderWidth:5,
        borderColor: "yellow", 
        borderRadius:5
      },
      boxOutside:{
        width: 300, 
        height:200, 
        position:'relative',
        borderWidth:7, 
        borderColor:"white",
        borderRadius:5,
        marginBottom:20,
      },
      activityIndicatorStyle:{
        position:'absolute', 
        left:0, 
        right:0, 
        top:0, 
        bottom:0
      }

})
export default styleContainer;