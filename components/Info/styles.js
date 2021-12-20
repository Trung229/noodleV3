import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    containerInfo:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: "100%",
        borderWidth:1,
        borderRadius:5
    },
    borderOutside:{
        width: "95%",
        height: "33%",
        borderWidth:10,
        borderRadius:10,
        borderColor:'white',
        backgroundColor:"#FFC900",
    },
    containerLeft:{
        flex:0.7,
        alignItems: 'center',
    },
    containerRight:{
        flex:1,
        height: "100%",
        justifyContent: 'center',
    },
    containerText:{
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        marginTop:5, 
        marginBottom:5
    },
    textBold:{
        fontWeight:'bold',
        color:'#880B0B',
        fontFamily:"Nunito",
    },
    textNormal:{
        fontWeight:'300',
        fontFamily:"Nunito",
        color:'#880B0B',
        textAlign:'left',
        minWidth:90
    },
    containerNoodle:{
        display: 'flex',
        flexDirection: 'row',
    },
    containerTextAvailable:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    textLength:{
        fontWeight:'500',
        color:'#D91313',
        marginRight:3,
        fontSize:16
    },
    text:{
        fontWeight:'500'
    },
    containerButton:{
        position:'relative',
    },
    textButton:{
        position:'absolute',
        top: 52,
        left: 0,
        right: 0,
        textAlign:'center',
        fontWeight:'500',
        color:'#A31616',
        fontSize:20
    }
})
export default styles;