import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image, StatusBar } from 'react-native';

export default function LoginScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Your login logic here
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Email Id"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
        />
        <View style={styles.forgotButtonContainer}>
          <TouchableOpacity  onPress={() => props.navigation.replace("forgotpassword")}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.loginBtn}  onPress={() => props.navigation.navigate("homepage")}>
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity>

      <View style={styles.orContainer}>
        <Text style={styles.orText}>OR</Text>
      </View>

      <TouchableOpacity style= {styles.signupBtn } onPress={() => props.navigation.replace("signup")}>
        <Text style={styles.signupText} >SIGN UP </Text> 
      </TouchableOpacity>

    
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
    forgotButtonContainer: {
      width: '100%',
      alignItems: 'flex-end', 
    },
    forgotText: {
      color: '#38447E',
      fontSize: 15,
    },
    orContainer: {
      marginVertical: 10, 
    
    },
    orText: {
      color: '#38447E',
      fontSize: 15,
    },
    loginBtn: {
      width: "70%",
      borderRadius: 12,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      backgroundColor: "#38447E",
    },
    loginText: {
      color: "white"
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
  


