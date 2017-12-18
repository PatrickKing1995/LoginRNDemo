import React, { Component } from 'react';
import { StyleSheet, 
    Text,
    View, 
    TextInput, 
    KeyboardAvoidingView, 
    TouchableOpacity , 
    AsyncStorage,
    Image,Alert, ListView, ActivityIndicator, StatusBar } from 'react-native';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1,r2)=>r1!==r2}),
        }
    }
    
    fetchData(){
        fetch('http://192.168.21.102/App_Demo/thanhvien.php', {method: "POST", body: null})
        .then((response)=>response.json())
        .then((responseData)=>{
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(responseData),
            });
        })
        .done()
    }

    componentDidMount(){
        this.fetchData();
    }

    taoHang(property){
        return(
            <View style={styles.hang}>
                <View style={styles.textInput}>
                    <Text>{property.nameTV}</Text>
                </View>
                <View style={styles.textInputAge}>
                    <Text>{property.ageTV}</Text>
                </View>
            </View>
        );
    }


  render() {
    return (
        <View style={styles.wrapper}>
            <StatusBar hidden={true}/>
            <Text style={styles.textRegular}>LIST OF MEMBER</Text>
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.taoHang}
                />                
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',  
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: 'pink', 
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
        marginBottom: 4,
        marginRight: 2,
        backgroundColor: '#fff',
    },
    textInputAge: {
        alignSelf: 'stretch',
        padding: 14,
        width: 250,
        marginBottom: 4,
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
        marginBottom: 5,
        textAlign: 'center',
        fontSize: 20,
        color: '#000',
    },
    hang: {
        flexDirection: 'row',
        flex: 1,

    }
});

