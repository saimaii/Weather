import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

const Header = (props) => {
    return (
        <View>
            <Text style = {styles.myState}>
                {props.myState}
            </Text>
        </View>
    )
}

export default Header
