import React, { Component } from 'react';
import { StyleSheet, 
    Text,
    View, 
    TextInput, 
    KeyboardAvoidingView, 
    TouchableOpacity , 
    AsyncStorage,
    Image,
    Alert } from 'react-native';
import {firebaseApp} from './FirebaseConfig';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    LoginPer(){
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(()=>{
                Alert.alert(
                    'LOGIN',
                    'Successfull',
                    [
                      {text: 'OK', onPress: () => this.props.navigation.navigate('MH_Home')},
                    ],
                    { cancelable: false }
                  )
                  this.setState({
                    email:'',
                    password:'',
                })
            })
            .catch(function(error) {
                Alert.alert(
                    'LOGIN',
                    'Fail',
                    [
                      {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
                  )
          });
    }
  render() {
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

                <View style={styles.container}>

                    <Image style={styles.imagelogin} source={require('./logopers.png')}/>

                    <TextInput style={styles.textInput} 
                        placeholder='Email'
                        onChangeText= {(email)=>{this.setState({email})}}
                        underlineColorAndroid='transparent'
                    />

                    <TextInput style={styles.textInput} 
                        placeholder='Password'
                        secureTextEntry={true}
                        onChangeText={(password)=>{this.setState({password})}}
                        underlineColorAndroid='transparent'
                    />
                    
                    <TouchableOpacity
                        onPress={()=>{this.LoginPer()}}
                        style={styles.buttonLogin}
                    >
                        <Text style={styles.textLogin}>Login</Text>
                    </TouchableOpacity >
                    <TouchableOpacity 
                        onPress={()=>{this.props.navigation.navigate('MH_Register')}}
                        style={styles.buttonSignup}
                    >
                        <Text style={styles.textRegular}> Not a member? <Text style={styles.textRegister}>Sign up now.</Text></Text>
                    </TouchableOpacity >
                </View>
                    

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
        paddingLeft: 10,
        paddingRight: 10,
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
    buttonLogin: {
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
        width: 250,
        height: 150,
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
