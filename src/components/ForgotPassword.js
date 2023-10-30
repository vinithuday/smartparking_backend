import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
} from "react-native";

export default function ForgotPassword(props) {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.logoContainer}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
      </View>

      <Text style={styles.Text}>Please Enter your Email Id</Text>

      <View style={styles.inputView}>
        <TextInput style={styles.textInput} placeholder="Email Id" />
      </View>

      <TouchableOpacity
        style={styles.emailButton}

        //write code for reset password
        // onPress={() => props.navigation.replace("login")}
      >
        <Text style={styles.emailText}>SEND EMAIL</Text>
      </TouchableOpacity>

      <View style={styles.backContainer}>
          <TouchableOpacity  onPress={() => props.navigation.replace("login")}>
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    marginBottom: 50,
    alignItems: "center",
  },
  logo: {
    width: 112,
    height: 94,
  },
  inputView: {
    borderRadius: 30,
    width: "70%",
    marginBottom: 20,
    alignItems: "center",
  },
  textInput: {
    height: 50,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
  },
  Text: {
    marginBottom: 40,
    fontSize: 15,
    fontStyle: "italic",
  },
  emailButton: {
    width: "70%",
    borderRadius: 12,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#38447E",
    marginTop: 20,
  },
  emailText: {
    color: "white",
  },
  backContainer: {
    width: '100%',
    alignItems: 'center', 
    marginTop: 30,
  },
  backText: {
    color: '#38447E',
    fontSize: 15,
  },
});
