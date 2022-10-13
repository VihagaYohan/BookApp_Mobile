import React, { Component,useState,useEffect } from 'react';
import {StyleSheet,View,ActivityIndicator,Modal} from 'react-native'

// components
import {AppWrapper} from '.'

// constants
import {colors,utils,constants} from '../utils'

const Loading = ()=>{
    const [visibility, setVisiblity] = useState(true);

    useEffect(()=>{},[])

    // change visiblity
    const changeVisibility = (valuejsjs)=>{
        setVisiblity(value)
    }

    return(
        <AppWrapper>
            <Modal visible={visibility}
            transparent
            animationType='slide'>
                <View style={styles.container}>
                    <ActivityIndicator
                    size='large'
                    color={colors.primaryPurple}/>
                </View>
            </Modal>
        </AppWrapper>
    )
}

const styles = StyleSheet.create({
    container:{
        width:constants.screenWidth,
        height:constants.screenHeight,
        backgroundColor:colors.transparentBlack,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Loading