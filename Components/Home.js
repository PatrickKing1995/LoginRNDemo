import React, { Component } from 'react';
import { StyleSheet, 
    Text,
    View, 
    TextInput, 
    KeyboardAvoidingView, 
    TouchableOpacity , 
    AsyncStorage,
    Image,Alert, ListView, ActivityIndicator, StatusBar, Picker, Modal } from 'react-native';

export default class Home extends Component {

    
    constructor(props){
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1,r2)=>r1!==r2}),
            modalVisible: false,
        }
    }

    static navigationOptions =({ navigation }) => { 
        const { params = {} } = navigation.state
        return{
        headerTintColor: '#363636',
        headerStyle: {
            backgroundColor: '#FFB5C5',
        },
        headerTitleStyle: { 
            color: '#363636' 
        },
        title: 'Register',
        headerRight: <TouchableOpacity
                        onPress={()=>params.handleSave()}
                     >
                        <Image style={{width: 35, height: 35, backgroundColor: 'transparent', marginRight: 20, }} source={require('./addone.png')}/>
                    </TouchableOpacity>
        }
    }
    
    toggleModal=()=>{
        this.setState({ modalVisible: true });
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
        this.props.navigation.setParams({ handleSave: this.toggleModal.bind(this) });
    }



    taoHang(property){
        return(
            <View style={styles.hang}>
                <View style={styles.textInput}>
                    <Text>{property.nameTV}</Text>
                </View>
                <View style={styles.textInputAge}>
                    <Image style={styles.imageInsert} source={require('./edit.png')}/>
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
               <Modal animationType = {"slide"} transparent = {true}
                  visible = {this.state.modalVisible}
                  onRequestClose = {() => { console.log("Modal has been closed.") } }>
                  <View style = {modal.modal}>
                     <Text style = {modal.text}>Modal is open!</Text>
                     
                     <TouchableOpacity onPress = {() => {
                        this.toggleModal(!this.state.modalVisible)}}>
                        
                        <Text style = {modal.text}>Close Modal</Text>
                     </TouchableOpacity>
                  </View>
               </Modal>
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
    containerDialog: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
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
    textInputAdd: {
        alignSelf: 'stretch',
        padding: 14,
        width: 200,
        marginBottom: 4,
        marginRight: 2,
        backgroundColor: '#fff',
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
    imageInsert: {
        width: 20,
        height: 20,
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



  const modal = StyleSheet.create ({

    modal: {
       flex: 1,
       alignItems: 'center',
       backgroundColor: '#CFCFCF',
       borderRadius: 30,

    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#363636',
    }
 })

