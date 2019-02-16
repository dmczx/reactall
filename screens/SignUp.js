import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { Container, Content, Header, Form, Input, Item, Label } from 'native-base';
import * as firebase from 'firebase';
import Head from './Head';
import Photo from './images/Photo';
// Initialize Firebase
const firebaseConfig = {
    // ADD YOUR FIREBASE CREDENTIALS
    apiKey: "AIzaSyCrSatD0YU0SpIn9Tfe-IcsNGMvBiB-9KA",
    authDomain: "reactnative-me.firebaseapp.com",
    databaseURL: "https://reactnative-me.firebaseio.com",
    projectId: "reactnative-me",
    storageBucket: "reactnative-me.appspot.com",
    
};
firebase.initializeApp(firebaseConfig);

export default class SignUp extends React.Component {
    constructor(props) {
        super(props)

        this.state = ({
            email: '',
            password: '',
            authenticating: true,
            user: '',
            error: '',
            status:'',
        })
    }


    handleLogin(navigate){
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function(firebaseUser){
          //Success
          console.log("logged in!")
          navigate("Tabs");
        }).catch(function(error){
            alert("Wrong email/password")
        });
      }
    
    handleSignUp(navigate){
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(function(firebaseUser){
          //Success
          console.log("Correct!")
          alert("Account created successfully")
        }).catch(function(error){
            alert("Error : The format is not correct OR account already exists!")
        });
      }

    static navigationOptions = {
        title: 'Register',
       // headerLeft: null,
       // gesturesEnabled: false,
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#c60512',
          borderBottomColor: '#c60512',
          borderBottomWidth: 1,
        },
        headerTitleStyle: {
          fontSize: 24,
        },
      };

    render() {

        const { navigate } = this.props.navigation;

        return (

            <ScrollView>
            <View
            style={{
              backgroundColor: 'white',
              height: 800,
            }}>

            <Photo />
    
            <View style={styles.container}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                autoCapitalize="none"
                placeholderTextColor="white"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(email) => this.setState({ email })}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                autoCorrect={false}
                placeholderTextColor="white"
                autoCapitalize="none"
                onChangeText={(password) => this.setState({ password })}
              />
    
              <Button
                style={styles.bt}
                full
                rounded
                success
                onPress={() => this.handleLogin(navigate)}                 
                title="Login"
                color="white"
                backgroundColor="#c60512"
              />
    
                <Button
                style={styles.bt1}
                full
                rounded
                primary
                onPress={() => this.handleSignUp(navigate)}   
                title="SignUp"
                color="white"
                backgroundColor="#c60512"
              />

            </View>
          </View>
          </ScrollView>

            // <Container style={styles.container}>
            // <Photo/>
            //     <Form>
            //         <Item floatingLabel>
            //             <Label>Email</Label>
            //             <Input
            //                 autoCorrect={false}
            //                 autoCapitalize="none"
            //                 onChangeText={(email) => this.setState({ email })}
            //             />

            //         </Item>

            //         <Item floatingLabel>
            //             <Label>Password</Label>
            //             <Input
            //                 secureTextEntry={true}
            //                 autoCorrect={false}
            //                 autoCapitalize="none"
            //                 onChangeText={(password) => this.setState({ password })}
            //             />
            //         </Item>

            //         <Button style={{ marginTop: 10 }}
            //             full
            //             rounded
            //             success
            //             onPress={() => this.loginUser(this.state.email, this.state.password)}
            //         >
            //             <Text style={{ color: 'white' }}> Login</Text>
            //         </Button>

            //         <Button style={{ marginTop: 10 }}
            //             full
            //             rounded
            //             primary
            //             onPress={() => this.signUpUser(this.state.email, this.state.password)}
            //         >
            //             <Text style={{ color: 'white' }}> Sign Up</Text>
            //         </Button>

            //     </Form>
            // </Container>
        );
    }
}

const styles = StyleSheet.create({
    input: {
      width: 350,
      height: 55,
      backgroundColor: '#c60512',
      margin: 7,
      padding: 8,
      color: 'white',
      borderRadius: 10,
      fontSize: 18,
      fontWeight: '500',
      opacity: 1,
    },
    bt: {
      width: 150,
      height: 44,
      borderRadius: 10,
      margin: 15,
      left: 0,
    },
    bt1: {
        width: 150,
        height: 44,
        borderRadius: 10,
        margin: 15,
        left: 0,
        top:-10,
      },
    container: {
      marginTop: 400,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });