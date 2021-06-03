import React from 'react';
import {Button, Text, View} from 'react-native';
import { ROUTES } from '../navigation/Routes';

export default ({navigation}) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Welcome to Home Screen!</Text>
      <Button onPress={() => navigation.navigate(ROUTES.DESTINATION_SCREEN)} title="Go to Destination" />
    </View>
  );
};
