
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import { useNavigation } from '@react-navigation/native';

const Homepage = () => {
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  const handleParkingLotPress = () => {
    navigation.navigate('parkinglot');
  };

  const handleLocationPress = () => {
    navigation.navigate('search');
  };

  return (
    <View style={styles.container}>
      <Header />

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
        <Text style={styles.selectSpaceText}>Select Preferred Space</Text>
      </View>

      <View style={styles.rowone}>
        <TouchableOpacity >
          <View style={styles.squareone}>
            <View style={styles.carIcon}>
              <Image
                source={require('../../assets/Car.png')}
                style={{ width: 25, height: 25 }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.squareone}>
            <View style={styles.carIcon}>
              <Image
                source={require('../../assets/Car.png')}
                style={{ width: 25, height: 25 }}
              />              
            </View>
          </View>
        </TouchableOpacity>

         <TouchableOpacity>
          <View style={styles.squareone}>
            <View style={styles.carIcon}>
              <Image
                source={require('../../assets/Car.png')}
                style={{ width: 25, height: 25 }}
              />
            </View>
          </View>
        </TouchableOpacity>

      </View>
      <View style={styles.rowtwo}>
        <TouchableOpacity >
          <View style={styles.squareone}>
            <View style={styles.carIcon}>
              <Image
                source={require('../../assets/Car.png')}
                style={{ width: 25, height: 25 }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.squareone}>
            <View style={styles.carIcon}>
              <Image
                source={require('../../assets/Car.png')}
                style={{ width: 25, height: 25 }}
              />              
            </View>
          </View>
        </TouchableOpacity>

         <TouchableOpacity>
          <View style={styles.squareone}>
            <View style={styles.carIcon}>
              <Image
                source={require('../../assets/Car.png')}
                style={{ width: 25, height: 25 }}
              />
            </View>
          </View>
        </TouchableOpacity>

      </View>


        <View style={styles.rowthree}>
        <TouchableOpacity >
          <View style={styles.squareone}>
            <View style={styles.carIcon}>
              <Image
                source={require('../../assets/Car.png')}
                style={{ width: 25, height: 25 }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.squareone}>
            <View style={styles.carIcon}>
              <Image
                source={require('../../assets/Car.png')}
                style={{ width: 25, height: 25 }}
              />              
            </View>
          </View>
        </TouchableOpacity>

         <TouchableOpacity>
          <View style={styles.squareone}>
            <View style={styles.carIcon}>
              <Image
                source={require('../../assets/Car.png')}
                style={{ width: 25, height: 25 }}
              />
            </View>
          </View>
        </TouchableOpacity>

      </View>





        <View style={styles.rowfour}>
        <TouchableOpacity >
          <View style={styles.squareone}>
            <View style={styles.carIcon}>
              <Image
                source={require('../../assets/Car.png')}
                style={{ width: 25, height: 25 }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.squareone}>
            <View style={styles.carIcon}>
              <Image
                source={require('../../assets/Car.png')}
                style={{ width: 25, height: 25 }}
              />              
            </View>
          </View>
        </TouchableOpacity>

         <TouchableOpacity>
          <View style={styles.squareone}>
            <View style={styles.carIcon}>
              <Image
                source={require('../../assets/Car.png')}
                style={{ width: 25, height: 25 }}
              />
            </View>
          </View>
        </TouchableOpacity>

      </View>





        <View style={styles.rowfive}>
        <TouchableOpacity >
          <View style={styles.squareone}>
            <View style={styles.carIcon}>
              <Image
                source={require('../../assets/Car.png')}
                style={{ width: 25, height: 25 }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.squareone}>
            <View style={styles.carIcon}>
              <Image
                source={require('../../assets/Car.png')}
                style={{ width: 25, height: 25 }}
              />              
            </View>
          </View>
        </TouchableOpacity>

         <TouchableOpacity>
          <View style={styles.squareone}>
            <View style={styles.carIcon}>
              <Image
                source={require('../../assets/Car.png')}
                style={{ width: 25, height: 25 }}
              />
            </View>
          </View>
        </TouchableOpacity>

      </View>





        <View style={styles.rowsix}>
        <TouchableOpacity >
          <View style={styles.squareone}>
            <View style={styles.carIcon}>
              <Image
                source={require('../../assets/Car.png')}
                style={{ width: 25, height: 25 }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.squareone}>
            <View style={styles.carIcon}>
              <Image
                source={require('../../assets/Car.png')}
                style={{ width: 25, height: 25 }}
              />              
            </View>
          </View>
        </TouchableOpacity>

         <TouchableOpacity>
          <View style={styles.squareone}>
            <View style={styles.carIcon}>
              <Image
                source={require('../../assets/Car.png')}
                style={{ width: 25, height: 25 }}
              />
            </View>
          </View>
        </TouchableOpacity>

      </View>





        <View style={styles.rowseven}>
        <TouchableOpacity >
          <View style={styles.squareone}>
            <View style={styles.carIcon}>
              <Image
                source={require('../../assets/Car.png')}
                style={{ width: 25, height: 25 }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.squareone}>
            <View style={styles.carIcon}>
              <Image
                source={require('../../assets/Car.png')}
                style={{ width: 25, height: 25 }}
              />              
            </View>
          </View>
        </TouchableOpacity>

         <TouchableOpacity>
          <View style={styles.squareone}>
            <View style={styles.carIcon}>
              <Image
                source={require('../../assets/Car.png')}
                style={{ width: 25, height: 25 }}
              />
            </View>
          </View>
        </TouchableOpacity>

      </View>






        <View style={styles.roweight}>
        <TouchableOpacity >
          <View style={styles.squareone}>
            <View style={styles.carIcon}>
              <Image
                source={require('../../assets/Car.png')}
                style={{ width: 25, height: 25 }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.squareone}>
            <View style={styles.carIcon}>
              <Image
                source={require('../../assets/Car.png')}
                style={{ width: 25, height: 25 }}
              />              
            </View>
          </View>
        </TouchableOpacity>

         <TouchableOpacity>
          <View style={styles.squareone}>
            <View style={styles.carIcon}>
              <Image
                source={require('../../assets/Car.png')}
                style={{ width: 25, height: 25 }}
              />
            </View>
          </View>
        </TouchableOpacity>

      </View>
        









      <TouchableOpacity style={styles.ParkingLotButton} onPress={handleParkingLotPress}>
        <Text style={styles.ParkingLotText}>Continue</Text> 
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
  selectSpaceText: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  ParkingLotButton: {
    width: '70%',
    borderRadius: 12,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#38447E',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 100,
  },
  ParkingLotText: {
    color: 'white',
  },
  squareone: {
    width: 50,
    height: 50,
    marginTop: 10,
    borderColor: 'rgba(128, 128, 128, 0.5)',
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowone: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 70,
    top: 350,
  },
  rowtwo: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 250,
    top: 350,
  },
  rowthree: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 70,
    top: 420,
  },
  rowfour: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 250,
    top: 420,
  },
  rowfive: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 70,
    top: 490,
  },
  rowsix: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 250,
    top: 490,
  },
  rowseven: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 70,
    top: 560,
  },
  roweight: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 250,
    top: 560,
  },
  carIcon: {
    justifyContent: 'center',
    alignItems: 'center', 
  },
});

export default Homepage;





