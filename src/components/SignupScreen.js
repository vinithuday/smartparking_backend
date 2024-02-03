import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';
import axios from 'axios';

export default function SignupScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:3000/api/auth/register', {
        email,
        password,
        confirmPassword,
      });
  
      if (response.data.message === 'Registration successful') {
        console.log('Signup successful:', response.data.message);
      } else {
        console.error('Signup failed:', response.data.message);
      }
    } catch (error) {
      if (error.response) {
 
        console.error('Signup failed with status:', error.response.status);
        console.error('Response data:', error.response.data);
      } else if (error.request) {
        console.error('No response received from the server');
        console.error('Request details:', error.request);
      }
       else {
        console.error('Error during request setup:', error.message);
      }
    }
  };
  

  return(

    <View style={styles.container}>
    <StatusBar style="auto" />

    <View style={styles.logoContainer}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
    </View>

    <View style={styles.inputView}>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Confirm Password"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
      />
    </View>

    <TouchableOpacity style={styles.signupBtn} onPress={handleSignUp}>
      <Text style={styles.signupText} >Create Account</Text> 
    </TouchableOpacity>


    <View style={styles.orContainer}>
        <Text style={styles.orText}>OR</Text>
      </View>


    <View style={styles.login}>
          <TouchableOpacity onPress={() => props.navigation.replace("login")}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
   
  </View>
);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoContainer: {
      marginBottom: 50,
      alignItems: 'center',
    },
    logo: {
      width: 112, 
      height: 94, 
    },
    inputView: {
      borderRadius: 30,
      width: '70%',
      marginBottom: 20,
      alignItems: 'center',
    },
    textInput: {
      height: 50,
      width: '100%',
      marginBottom: 20,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 10,
      paddingLeft: 10,
    },
  login: {
      alignItems: 'center', 
    },
    loginText: {
        color: '#38447E',
        fontSize: 15,
      },
    orContainer: {
      marginVertical: 20, 
    
    },
    orText: {
      color: '#38447E',
      fontSize: 15,
    },
    signupBtn: {
      width: "70%",
      borderRadius: 12,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      backgroundColor: "#38447E",
    },
    signupText: {
      color: "white"
    },
  });

