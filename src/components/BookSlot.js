


import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';

const BookSlot = () => {
    const [searchText, setSearchText] = useState('');
    const [chosenDate, setChosenDate] = useState('');
    const [showCalendar, setShowCalendar] = useState(false);
    const navigation = useNavigation();

    const handleQRCodePress = () => {
        navigation.navigate('qrcode');
    };

    const handleLocationPress = () => {
        navigation.navigate('search');
    };

    const handleDateSelect = (day) => {
        setChosenDate(day.dateString);
        setShowCalendar(false);
        // Additional logic with the selected date...
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
                <View style={styles.calendarContainer}>
                    <TouchableOpacity onPress={() => setShowCalendar(true)}>
                        <Text style={styles.date}>{chosenDate !== '' ? chosenDate : 'Select a date'}</Text>
                    </TouchableOpacity>
                    {showCalendar && (
                        <Calendar
                            onDayPress={(day) => handleDateSelect(day)}
                            markedDates={{ [chosenDate]: { selected: true, selectedColor: '#38447E' } }}
                        />
                    )}
                </View>
            </View>
            <TouchableOpacity style={styles.bookSlotButton} onPress={handleQRCodePress}>
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
        bottom: 100,
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
    date: {
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 24,
        color: '#38447E',
    },
    calendarContainer: {
        alignItems: 'center',
        fontSize: 18,
    },
});

export default BookSlot;
