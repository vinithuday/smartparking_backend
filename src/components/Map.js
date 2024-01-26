

import React, { useState, useEffect } from "react";
import * as Location from 'expo-location';
import { View, StyleSheet, Button, Text, TouchableOpacity, Image, TextInput } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Header from "./Header";
import axios from 'axios';
import Footer from "./Footer";

const Map = (props) => {
  const [mapRegion, setMapRegion] = useState({
    latitude: 49.488888,
    longitude: 8.469167,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [searchText, setSearchText] = useState("");
  const [markerCoordinate, setMarkerCoordinate] = useState(null);

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.error('Permission to access location was denied');
    }
    let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    setMarkerCoordinate({ latitude: location.coords.latitude, longitude: location.coords.longitude });
    console.log(location.coords.latitude, location.coords.longitude);
  };

  useEffect(() => {
    userLocation();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${searchText}`
      );

      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        setMapRegion({
          latitude: parseFloat(lat),
          longitude: parseFloat(lon),
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
        setMarkerCoordinate({ latitude: parseFloat(lat), longitude: parseFloat(lon) });
      }
    } catch (error) {
      console.error('Error while geocoding:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Header />

      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        value={searchText}
        onChangeText={text => setSearchText(text)}
        onSubmitEditing={handleSearch}
      />

      <MapView style={styles.map} region={mapRegion}>
        {markerCoordinate && (
          <Marker coordinate={markerCoordinate}>
            <Image source={require('../../assets/pin.png')} style={{ width: 25, height: 25 }} />
          </Marker>
        )}
      </MapView>

      <View style={styles.buttonContainer}>
        <Button title='Get Location' onPress={userLocation} />
      </View>

      <TouchableOpacity
        style={styles.ParkingLotButton}
        onPress={() => props.navigation.navigate("homepage")}
      >
        <Text style={styles.ParkingLotText}>Continue</Text>
      </TouchableOpacity>
      <View style={styles.footerContainer}>
      <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  ParkingLotButton: {
    borderRadius: 12,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#38447E",
    alignSelf: "center",
    position: "absolute",
    bottom: 100,
    width: '70%',
  },
  ParkingLotText: {
    color: "white",
  },
  searchBar: {
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    margin: 10,
    paddingLeft: 10,
    position: 'absolute',
    top: 130, 
    left: 50,
    right: 50,
    zIndex: 1,
    backgroundColor: 'white', 
  },
  footerContainer: {
    alignItems: 'center',
  },
});

export default Map;
