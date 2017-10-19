import React, { Component } from 'react';
import{
    AppRegistry,
    StyleSheet,
    Text, 
    View,
    Image,
    TextInput,
    TouchableOpacity,
    AsyncStorage
} from 'react-native'

export default class App extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('./background.jpg')} style={styles.backgroundImage}>
                    <View style={styles.content}>
                        <Text style={styles.logo}>- Art Gallery -</Text>

                        <View style={styles.inputContainer}>

                            <TextInput underlineColorAndroid='transparent' style={styles.input} 
                            onChangeText={(username) => this.setState({username})}
							value={this.state.username}
							placeholder='username'>
                            </TextInput>

                        
                        </View>
                         <TouchableOpacity onPress={this.login} style= {styles.buttonContainer}>
                                <Text style={styles.buttonText}> Login</Text>
                            </TouchableOpacity>
                    </View>
                </Image>
            </View>

        );

    }
	constructor(props){
		super(props);
		this.state = {username: ''};
	}
	login = () => {

        fetch('C:/xampp/php/www/Midterm-todo/midterm/backend/endpoint.php', {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type' :'application/json',
            },
            body: JSON.stringify({
                username: this.state.username

            })
        })

        .then((response) => response.json())
        .then((res) =>{

            if (res.success === true){
                var username = res.message;

                AsyncStorage.setItem('username', username);

                this.props.navigator.push({
                    id:'Todoview'
                });
            }else{
                alert(res.message);
            }
        })
        .done();
    }
 }
var styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    backgroundImage:{
        flex: 1,
        alignSelf: 'stretch',
        width: null,
        justifyContent: 'center',
    },
    content:{
        alignItems: 'center',
    },
    logo:{
        color: 'white',
        fontSize: 40,
        fontStyle: 'Italic',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer:{
        margin: 20,
        marginBottom: 0,
        padding: 20,
        paddingBottom: 10,
        alignSelf:'stretch',
        borderWidth: 1,
        borderColor:'#fff',
        backgroundColor: 'rgba(255,255,255,0.2)',

    },
    input:{
        fontSize: 16,
        height: 40,
        paddingBottom: 10,
        marginBottom: 10,
        backgroundColor:'rgba(255,255,255,1)',
    },
    buttonContainer:{
        alignSelf: 'stretch',
        margin: 20,
        padding: 20,
        backgroundColor: 'orange',
        borderWidth: 1,
        borderColor: '#fff',
    },
    buttonText:{
        fontSize: 16,
        fontWeight: 'bold',
        textAlign:'center',
    }
});