import React from 'react';
import { View, Text, Image, StyleSheet, TextInput} from 'react-native';
import Header from './Header';
import Footer from './Footer';
const Notification = ({ title, name }) => {
  return (
 
 <View
      style={[
        styles.container,]}>
      <Header />
  <Text> this is Notification page</Text>
    
<Footer/>
</View>

  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    
});
export default Notification;