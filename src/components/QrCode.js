import React, {useState} from 'react';
import { View, Text, Image, StyleSheet,  TextInput} from 'react-native';
import Header from './Header';
import Footer from './Footer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import QRCode from 'react-native-qrcode-svg';

const QrCode = ({ title, name }) => {

    const [input, setInput] = useState('');
    const [qrValue, setQrValue] = useState('');
  return (
 
 <View style={styles.container}>
    <QRCode value={qrValue ?qrValue: 'NA'}
    size={200}
    color='white'
    backgroundColor='black'> 
    </QRCode>      
    
    <TextInput onChangeText={(text) => {setInput(text)}}></TextInput>
    <TouchableOpacity onPress={()=>{setQrValue(input)}}>
        <Text> Press</Text>
    </TouchableOpacity>
<Footer/>
</View>

  );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },

    
});
export default QrCode;