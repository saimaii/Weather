'use strict'
const React = require('react-native');
const { StyleSheet } = React;

module.exports = StyleSheet.create({
    container: {

        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fafafa',
        paddingTop: 23,
        flexDirection:'row',


    },
    weatherContainer:{
        backgroundColor:'rgba(225,225,225,0.7)'
    },
    myState: {
        marginTop: 20,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10,
        backgroundColor: '#e57373',
        alignItems: 'center'
    },

    text: {
            fontSize: 30,
            alignSelf: 'center',
            color: 'red'
    },
    cityName:{

        textAlign: 'center',
        color: '#424242',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10,
        alignItems: 'center'

    },
    center:{
        alignSelf: 'center',
    },
    centerImage:{
        alignSelf: 'center',
        width: 50,
        height: 50
    },
    background:{
        backgroundColor:'rgba(225,225,225,0.3)',
        flex:1

    },
    color:{
        marginTop: 20,
        fontSize: 20,
        padding: 10,
        alignItems: 'center',
        flexDirection:'row'
    },
    backgroundImage:{
        height: null,
        flex: 1,
        width: null
    }
});