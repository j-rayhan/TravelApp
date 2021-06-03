import React from 'react';
import {Button, Text, View} from 'react-native';
import { COLORS, styles } from '../constants';
import { ROUTES } from '../navigation/Routes';

export default ({navigation}) => {
  return (
    <View style={[styles.container, {backgroundColor: COLORS.white}, styles.center]}>
      <Text>Welcome to Home Screen!</Text>
      <Button onPress={() => navigation.navigate(ROUTES.DESTINATION_SCREEN)} title="Go to Destination" />
    </View>
  );
};
