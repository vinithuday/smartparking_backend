// import React, { useState, useEffect } from "react";
// import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
// import QRCode from "react-native-qrcode-svg";
// import Header from "./Header";
// import Footer from "./Footer";
// import { useNavigation } from "@react-navigation/native";
// import { v4 as uuidv4 } from "uuid";

// // Import the library after installing it
// import "react-native-get-random-values";

// const QrCode = () => {
//   const [qrValue, setQrValue] = useState("");
//   const navigation = useNavigation();

//   // Function to generate a unique QR code value
//   const generateQrCodeValue = () => {
//     const uniqueValue = `${uuidv4()}_${Date.now()}`;
//     return uniqueValue;
//   };

//   // Update QR code value when the component mounts
//   useEffect(() => {
//     setQrValue(generateQrCodeValue());
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Header />
//       <Text style={styles.selectSpaceText}>
//         Scan this QR Code at the Entrance
//       </Text>

//       {qrValue && (
//         <QRCode
//           value={qrValue}
//           size={200}
//           color="white"
//           backgroundColor="black"
//         />
//       )}

//       <TouchableOpacity onPress={() => navigation.navigate("someScreen")}>
//         {/* Add any other content or functionality you need */}
//       </TouchableOpacity>

//       <Footer />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: '#ffff',
//   },
//   selectSpaceText: {
//     fontSize: 25,
//     fontWeight: "bold",
//     marginTop: 10,
//     color: "#38447E",
//     bottom: 150,
//   },
// });

// export default QrCode;

//Correct code

// import React, { useState, useEffect } from "react";
// import { View, StyleSheet, Text } from "react-native";
// import QRCode from "react-native-qrcode-svg";

// const QrCode = () => {
//   const [qrValue, setQrValue] = useState("");

//   useEffect(() => {
//     // Generate a unique QR code value when the component mounts
//     generateAndSetQrCodeValue();
//   }, []);

//   const generateAndSetQrCodeValue = () => {
//     // Implement your logic to generate a unique value, for example, a timestamp
//     const uniqueValue = Date.now().toString();
//     setQrValue(uniqueValue);
//   };

//   return (
//     <View style={styles.container}>
//       {qrValue ? (
//         <>
//           <QRCode value={qrValue} size={200} color="white" backgroundColor="black" />
//           <Text>{qrValue}</Text>
//         </>
//       ) : (
//         <Text>Loading QR code...</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// export default QrCode;

import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import QRCode from "react-native-qrcode-svg";
import Footer from "./Footer";
import Header from "./Header";

const QrCode = () => {
  const [qrValue, setQrValue] = useState("");

  useEffect(() => {
    // Generate a unique QR code value when the component mounts
    generateAndSetQrCodeValue();
  }, []);

  const generateAndSetQrCodeValue = () => {
    // Implement your logic to generate a unique value, for example, a timestamp
    const uniqueValue = Date.now().toString();
    setQrValue(uniqueValue);
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.selectSpaceText}>
        Scan this QR Code at the Entrance
      </Text>
      {qrValue ? (
        <View style={styles.qrCodeContainer}>
          <QRCode
            value={qrValue}
            size={200}
            color="white"
            backgroundColor="black"
            key={qrValue}
          />
          <Text style={styles.qrnumber}>{qrValue}</Text>
        </View>
      ) : (
        <Text>Loading QR code...</Text>
      )}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffff",
  },
  selectSpaceText: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
    color: "#38447E",
    bottom: 120,
  },
  qrnumber: {
    fontSize: 25,
    top: 20,
    color: "#38447E",
    fontWeight: "bold",
  },
  qrCodeContainer: {
    borderWidth: 2,
    borderColor: "black", // Set the border color as per your requirement
    padding: 50,
    borderRadius: 10, // Set the border radius as per your requirement
  },
});

export default QrCode;
