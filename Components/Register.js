import React, { Component } from 'react';
import { StyleSheet, 
    Text,
    View, 
    TextInput, 
    KeyboardAvoidingView, 
    TouchableOpacity , 
    AsyncStorage,
    Image,Alert } from 'react-native';
import {firebaseApp} from './FirebaseConfig';


export default class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }
    Registry(){
        firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(()=>{
            Alert.alert(
                'REGISTER',
                'Successfull',
                [
                  {text: 'OK', onPress: () => this.props.navigation.navigate('MH_Login')},
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
                'REGISTER',
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

                    <Image style={styles.imagelogin} source={require('./register.png')}/>

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
                        onPress={()=>this.Registry()}
                        style={styles.buttonRegister}
                    >
                        <Text style={styles.textLogin}>Sign up</Text>
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

