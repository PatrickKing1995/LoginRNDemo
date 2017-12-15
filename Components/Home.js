import React, { Component } from 'react';
import { StyleSheet, 
    Text,
    View, 
    TextInput, 
    KeyboardAvoidingView, 
    TouchableOpacity , 
    AsyncStorage,
    Image,Alert } from 'react-native';


export default class Home extends Component {
  render() {
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',  
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 40,
        paddingRight: 40,
    },
    header: {
        fontSize: 24,
        marginBottom: 60,
        color: '#fff',
        fontWeight:'bold',
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 14,
        width: 250,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    buttonRegister: {
        alignSelf: 'stretch',
        padding: 12,
        alignItems: 'center',
        backgroundColor: '#363636',
    },
    buttonSignup: {
        alignSelf: 'stretch',
        alignItems: 'center',
        marginTop: 5,
        backgroundColor: 'transparent',
    },
    textLogin: {
        color: '#F5F5F5',
        fontSize: 20,
        fontWeight: 'bold',
    },
    imagelogin: {
        width: 70,
        height: 70,
        marginBottom: 20,
        backgroundColor: 'transparent',
    },
    textRegister: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#363636',
    },
    textRegular: {
        marginTop: 5,
        textAlign: 'center',
        fontSize: 14,
        color: '#fff',
    }
});

