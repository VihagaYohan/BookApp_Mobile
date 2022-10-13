import React, { Component } from 'react';
import {StyleSheet,View,Text,TouchableOpacity,Image} from 'react-native'

const Avatar = props=> {
    return(
        <TouchableOpacity>
            <Image source={{uri:"https://images.unsplash.com/photo-1614436163996-25cee5f54290?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=742&q=80"}}
            style={{
                width:50,
                height:50,
                borderRadius:25
            }}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

})

export default Avatar