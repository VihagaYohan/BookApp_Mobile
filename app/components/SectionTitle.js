import React, { Component } from 'react';
import {StyleSheet,View} from 'react-native'

// components
import {AppText} from '.'

// constants
import {fonts,colors,appStyles, constants} from '../utils'

const {BoldText,RegularText} = AppText

const SectionTitle = ({title})=>{
    return(
        <View style={styles.container}>
            <BoldText style={styles.sectionTitle}>{title}</BoldText>
            <RegularText style={styles.subTitle}>More</RegularText>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        ...appStyles.flex_Row,
        justifyContent:'space-between',
        marginVertical:constants.gap
    },
    sectionTitle:{
        color:colors.primaryBlack
    },
    subTitle:{
        color:colors.lightPurple
    }
})

export default SectionTitle;