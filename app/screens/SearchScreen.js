import React, { Component } from 'react';
import {StyleSheet,View,Text} from 'react-native'

// components
import {AppHeader} from '../components'

const Screen = ()=>{
    return(
        <View>
            <AppHeader title="Search" isRightIcon={false} />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default Screen;