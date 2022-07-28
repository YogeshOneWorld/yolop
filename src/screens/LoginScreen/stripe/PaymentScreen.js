import React from 'react';
import {CardField, useStripe} from '@stripe/stripe-react-native';
import styles from './styles';

export default function PaymentScreen() {
  const {confirmPayment} = useStripe();

  return (
    <CardField
      postalCodeEnabled={true}
      placeholders={{
        number: '4242 4242 4242 4242',
      }}
      cardStyle={styles.cardStyle}
      style={styles.demoCardstyle}
      onCardChange={cardDetails => {
        console.log('cardDetails', cardDetails);
      }}
      onFocus={focusedField => {
        console.log('focusField', focusedField);
      }}
    />
  );
}
