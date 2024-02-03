import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Header from "./Header";
import Footer from "./Footer";

const BookSlot = () => {
  const [searchText, setSearchText] = useState("");
  const [chosenDate, setChosenDate] = useState(new Date());
  const [chosenTime, setChosenTime] = useState("");
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const { slot } = route.params;

  useEffect(() => {
    console.log("Selected Slot:", slot);
  }, [slot]);

  const currentDate = new Date();
  const maxSelectableDate = new Date();
  maxSelectableDate.setDate(currentDate.getDate() + 5);

  const handleQRCodePress = () => {
    if (!chosenDate || chosenTime === "") {
      Alert.alert(
        "Validation Error",
        "Please fill in all the details (date and time) before booking the slot."
      );
    } else if (chosenDate < currentDate) {
      Alert.alert("Validation Error", "Please select a future date.");
    } else if (chosenDate > maxSelectableDate) {
      Alert.alert(
        "Validation Error",
        "Please select a date within the next 5 days."
      );
    } else {
      const qrCodeValue = generateQrCodeValue(chosenDate, chosenTime);
      if (qrCodeValue) {
        console.log("Generated QR Code Value:", qrCodeValue);
        navigation.navigate("qrcode");
      } else {
        console.error("Failed to generate QR code value.");
      }
    }
  };

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const showTimePicker = () => {
    setTimePickerVisible(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisible(false);
  };


const handleDateConfirm = (date) => {
    const selectedDateTime = new Date(date);
    const currentDateTime = new Date();
  
    if (selectedDateTime <= currentDateTime) {
      alert("Please select a date and time in the future.");
    } else {
      const maxSelectableDate = new Date();
      maxSelectableDate.setDate(currentDateTime.getDate() + 5);
  
      if (selectedDateTime > maxSelectableDate) {
        alert("Please select a date within the next 5 days.");
      } else {
        setChosenDate(selectedDateTime);
        hideDatePicker();
        hideTimePicker();
        setTimeout(() => {
          showTimePicker();
        }, 1);
      }
    }
  };
  
  const handleTimeConfirm = (time) => {
    console.log("Chosen Time:", time);
    setChosenTime(time);
    hideTimePicker();
  };

  const generateQrCodeValue = (chosenDate, chosenTime) => {
    if (!chosenDate || !chosenTime) {
      console.error("Chosen date or time is not set.");
      return null;
    }

    return `${chosenDate.toISOString()}_${chosenTime}`;
  };

  return (
    <View style={styles.container}>
      <Header />

      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <Text style={styles.selectedSlotText}>Selected Slot: {slot}</Text>

      <TouchableOpacity onPress={showDatePicker}>
        <Text style={styles.date}>
          {chosenDate ? chosenDate.toLocaleDateString() : "Select date"}
        </Text>
      </TouchableOpacity>

      {isDatePickerVisible && (
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={hideDatePicker}
        />
      )}

      <TouchableOpacity onPress={showTimePicker}>
        <Text style={styles.time}>
          {chosenTime !== ""
            ? chosenTime.toLocaleTimeString()
            : "Select time"}
        </Text>
      </TouchableOpacity>

      {isTimePickerVisible && (
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleTimeConfirm}
          onCancel={hideTimePicker}
        />
      )}

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
    alignItems: "center",
    backgroundColor: "#ffff",

    justifyContent: "center",
  },
  bookSlotButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#38447E",
    borderRadius: 5,
  },

  bookSlotText: {
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

  selectedSlotText: {
    fontSize: 25,
    fontWeight: "bold",
    bottom: 180,
  },
  date: {
    justifyContent: "center",
    textAlign: "center",
    marginBottom: 20,
    fontSize: 24,
    color: "#38447E",
    bottom: 120,
  },

  time: {
    justifyContent: "center",
    textAlign: "center",
    marginBottom: 20,
    fontSize: 24,
    color: "#38447E",
    bottom: 80,
  },
// });
});

export default BookSlot;






