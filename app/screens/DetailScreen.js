import React, { Component } from 'react';
import {StyleSheet,View,Text} from 'react-native'

// componetns
import {AppWrapper,AppHeader} from '../components'

const Screen = ()=>{
    return(
        <AppWrapper>
            <AppHeader title="Details"
            isRight={false}
            leftPress={()=>alert('left press')}
            rightPress={()=>alert('right press')}/>
        </AppWrapper>
    )
}

const styles = StyleSheet.create({

})

export default Screen;