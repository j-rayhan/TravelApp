import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTS, images, SIZES, styles } from '../constants';
import { ROUTES } from '../navigation/Routes';

export default ({ navigation }) => {
  return (
    <SafeAreaView style={[styles.container, styles.center, { backgroundColor: COLORS.white }]}>
      <View style={[styles.container, styles.center]}>
        <Image
          source={images.onboardingImage}
          resizeMode="contain"
          style={{
            width: SIZES.width,
            height: SIZES.height,
          }}
        />
      </View>
      <View style={[styles.container, styles.center]}>
        <View style={{ alignItems: 'center', marginHorizontal: SIZES.padding }}>
          <Text style={{ ...FONTS.h2 }}>Digital ticket</Text>
          <Text style={{ ...FONTS.body3, color: COLORS.gray, marginTop: SIZES.padding, textAlign: 'center' }}>
            Easy solution to buy tickets for your travel, business trips, transportation, lodging and culinary.
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.shadow, { marginTop: SIZES.padding * 2, width: SIZES.width * 0.7, height: 50, alignItems: 'center', justifyContent: 'center' }]}
          onPress={() => navigation.navigate(ROUTES.HOME_SCREEN)}
        >
          <LinearGradient
            style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}
            colors={['#46aeff', '#5884ff']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Start !</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
