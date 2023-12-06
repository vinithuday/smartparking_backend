import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import { useNavigation } from '@react-navigation/native';

const BookSlot = () => {
    const [searchText, setSearchText] = useState('');
    const navigation = useNavigation();
  
    const handleQRCodePress = () => {
      navigation.navigate('qrcode');
    };
  
    const handleLocationPress = () => {
      navigation.navigate('search');
    };
  

  return (
    <View style={styles.container}>
      <Header />

      <Text> This is the BookSlot page</Text>
      <View style={styles.searchBarContainer}>
        <View style={styles.searchBar}>
          <TouchableOpacity onPress={handleLocationPress}>
            <Image source={require('../../assets/location.png')} style={styles.locationIcon} />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Search..."
            value={searchText}
            onChangeText={text => setSearchText(text)}
          />
        </View>
        </View>

     
      <TouchableOpacity
        style={styles.bookSlotButton}
        onPress={handleQRCodePress}
      >
        <Text style={styles.bookSlotText}>Book Slot</Text>
      </TouchableOpacity>
      <Footer />
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
  bookSlotButton: {
    width: '70%', 
    borderRadius: 12,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#38447E',
    marginTop: 20,
    position: 'absolute',
    bottom : 100,

  },
  bookSlotText: {
    color: 'white',
  },
  
  searchBarContainer: {
    alignItems: 'center',
    marginBottom: '130%', 
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 50,
    width: '70%',
    height: 50,
    margin: 40,
  },
  locationIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 17,
  },
});

export default BookSlot;



