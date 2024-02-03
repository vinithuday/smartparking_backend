

import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { CardField, useStripe } from '@stripe/stripe-react-native';
import Header from './Header';
import Footer from './Footer';
import { useNavigation } from '@react-navigation/native';

const Payment = (props) => {
  const { confirmPayment } = useStripe();
  const navigation = useNavigation();

  const handlePayment = async () => {
    try {
      const { paymentIntent, error } = await confirmPayment('client_secret', {
        type: 'Card',
        billingDetails: {
          address: {
            postalCode: '12345',
          },
        },
      });

      if (error) {
        console.error(error);
        // Handle payment error
      } else if (paymentIntent) {
        // Payment succeeded
        console.log(paymentIntent);
        // Handle successful payment
      }
    } catch (error) {
      console.error(error);
      // Handle unexpected errors
    }
  };

  const handlePayPalButtonClick = () => {
    // Navigate to the PayPal screen
    navigation.navigate('PayPalScreen');
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.paymentContainer}>
        <CardField
          postalCodeEnabled={true}
          placeholders={{
            number: '4242 4242 4242 4242',
          }}
          cardStyle={{
            backgroundColor: '#FFFFFF',
            textColor: '#000000',
            borderWidth: 1,
            borderColor: '#38447E',
          }}
          style={{
            width: '90%',
            height: 80,
            marginVertical: 30,
          }}
          onCardChange={(cardDetails) => {
            console.log('cardDetails', cardDetails);
          }}
          onFocus={(focusedField) => {
            console.log('focusField', focusedField);
          }}
        />
        <TouchableOpacity style={styles.button} onPress={handlePayment}>
          <Text style={styles.buttonText}>Pay</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}  onPress={() => props.navigation.navigate("paypalscreen")}>
          <Text style={styles.buttonText}>Pay with PayPal</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentContainer: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#38447E',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '70%',
    borderRadius: 12,
    height: 50,
    justifyContent: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#38447E',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Payment;
