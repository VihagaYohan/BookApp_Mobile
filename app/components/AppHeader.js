import React, { Component } from 'react';
import {StyleSheet,View,Image} from 'react-native'

// utils
import {constants,colors} from '../utils'

const {screenWidth} = constants

const AppHeader = ()=>{
    return(
        <View style={styles.container}></View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    }
})

export default AppHeader;