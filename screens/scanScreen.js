import React from 'react';
import { StyleSheet, Text, View, Header, Image, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default class Transaction extends React.Component{
constructor(){
    super();
    this.state={
        hasCameraPermissions:null,
        scanned:false,
        scannedData:'',
        buttonState:'normal',
        
    }
}

getCameraPermissions=async()=>{
    const{status}=await Permissions.askAsync(Permissions.CAMERA)
    this.setState({
        hasCameraPermissions:status==="granted",
        buttonState:clicked,
        scanned:false
    })
}
handleBarCodeScanned=async({type,data})=>{
        this.setState({
            scanned:true,
            scannedData:data,
            buttonState:'normal'
        })
    }

    render(){
        const hasCameraPermissions = this.state.hasCameraPermissions;
        const scanned = this.state.scanned;
        const buttonState = this.state.buttonState;

        if(buttonState === 'clicked' && hasCameraPermissions){
        return(
            <BarCodeScanner 
                onBarcodeScanned={scanned ? undefined: this.handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
                />
        );
        }else if(buttonState==='normal'){
            return(
                <View style={styles.container} >
                    <Text style={{textAlign:'center',fontSize:30}} >{
                        hasCameraPermissions === true ? this.state.scanned:"Request Camera Permission" 
                    }</Text>
                    <Image 
                        source={require("C:/Users/Kanishk/Documents/Class_68 - Copy/assets/Scanner.jpg")}
                        style={{width:200,height:200}}
                    />
                    <TouchableOpacity 
                        onPress={this.getCameraPermissions}
                        style={styles.scanButton}
                        title='Bar Code Scanner'
                    >
                        <Text style={styles.buttonText}>Scan QR Code</Text>
                    </TouchableOpacity>
                </View>
                
            )
        }
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center' ,
        alignSelf:'center',
        
    },
    scanButton:{
        backgroundColor:'yellow',
        width:100,
        borderWidth:1.5,
        marginLeft:100,
        marginTop:20
    },
    buttonText:{
        fontSize:15,
        textAlign:'center',
        marginTop:10,
    },
})