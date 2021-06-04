import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTS, icons, images, SIZES, styles } from '../constants';
import { ROUTES } from '../navigation/Routes';
const StartReview = ({ rate }) => {
  const startComponents = [],
    fullStar = Math.floor(rate),
    noStar = Math.floor(5 - rate),
    halfStar = 5 - fullStar - noStar;

  // full star
  for (let i = 0; i < fullStar; i++) {
    startComponents.push(
      <Image
        key={`full-${i}`}
        source={icons.starFull}
        resizeMode="cover"
        style={{
          width: 20,
          height: 20
        }}
      />
    )
  }

  // half star
  for (let i = 0; i < halfStar; i++) {
    startComponents.push(
      <Image
        key={`half-${i}`}
        source={icons.starHalf}
        resizeMode="cover"
        style={{
          width: 20,
          height: 20
        }}
      />
    )
  }

  // empty star
  for (let i = 0; i < noStar; i++) {
    startComponents.push(
      <Image
        key={`empty-${i}`}
        source={icons.starEmpty}
        resizeMode="cover"
        style={{
          width: 20,
          height: 20
        }}
      />
    )
  }
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {startComponents}
      <Text style={{ ...FONTS.body3, marginLeft: SIZES.base, color: COLORS.gray }}>
        {rate}
      </Text>
    </View>
  )
}
const IconLabel = ({ label, icon }) => (
  <View style={{ alignItems: 'center' }}>
    <Image
      source={icon}
      resizeMode="cover"
      style={{
        width: 50,
        height: 50
      }}
    />
    <Text style={{ ...FONTS.h3, marginTop: SIZES.padding, color: COLORS.gray }}>
      {label}
    </Text>
  </View>
)
export default ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Header */}
      <View style={{ flex: 2 }}>
        <Image
          source={images.skiVillaBanner}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '80%'
          }}
        />
        <View style={[{
          position: 'absolute',
          bottom: '5%',
          left: '5%',
          right: '5%',
          borderRadius: 15,
          padding: SIZES.padding,
          backgroundColor: COLORS.white
        }, styles.shadow]}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.shadow}>
              <Image
                source={images.skiVilla}
                resizeMode="cover"
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: SIZES.base
                }}
              />
            </View>
            <View style={{ marginHorizontal: SIZES.radius, justifyContent: 'space-between' }}>
              <Text style={{ ...FONTS.h3 }}>
                Ski Villa
              </Text>
              <Text style={{ ...FONTS.body3, color: COLORS.gray }}>
                France
              </Text>
              <StartReview rate={3.5} />
            </View>
          </View>
          <View style={{ marginTop: SIZES.radius }}>
            <Text style={{ ...FONTS.body4, textAlign: 'justify', color: COLORS.gray }}>
              Ski Villa offers simple rooms with mountain views in front of the ski lift of the Ski Resort.
              </Text>
          </View>
        </View>
        {/* Header button */}
        <View
          style={{
            position: 'absolute',
            top: 50,
            left: 20,
            right: 20,
            flexDirection: 'row'
          }}
        >
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate(ROUTES.HOME_SCREEN)}
            >
              <Image
                source={icons.back}
                resizeMode="cover"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <TouchableOpacity
              onPress={() => { }}
            >
              <Image
                source={icons.menu}
                resizeMode="cover"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Body */}
      <View style={{ flex: 1.5 }}>
        <View style={{ flexDirection: 'row', marginTop: SIZES.base, paddingHorizontal: SIZES.padding * 2, justifyContent: 'space-between' }}>
          <IconLabel
            icon={icons.villa}
            label="Villa"
          />
          <IconLabel
            icon={icons.parking}
            label="Parking"
          />
          <IconLabel
            icon={icons.wind}
            label="Wind"
          />
        </View>
        {/* About */}
        <View style={{ marginTop: SIZES.padding, paddingHorizontal: SIZES.padding }}>
          <Text style={{ ...FONTS.h2 }}>About</Text>
          <Text style={{ marginTop: SIZES.radius, color: COLORS.gray, ...FONTS.body3 }}>
            Located at the Alps with an altitude of 1,702 meters. The ski area is the largest ski area in the world and is known as the best place to ski. Many other facilities, such as fitness center, sauna, steam room to star-rated restaurants.
          </Text>
        </View>
      </View>
      {/* Footer */}
      <View style={{ flex: 0.5, paddingHorizontal: SIZES.padding }}>
        <LinearGradient
          style={{ height: 70, width: '100%', borderRadius: 15 }}
          colors={['#edf0fc', '#d6dfff']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <View style={[styles.container, styles.row]}>
            <View style={{ flex: 1, marginHorizontal: SIZES.padding, justifyContent: 'center' }}>
              <Text style={{ ...FONTS.h1 }}>$1000</Text>
            </View>
            <TouchableOpacity
              style={{ width: 130, height: '80%', marginHorizontal: SIZES.radius }}
              onPress={() => { }}
            >
              <LinearGradient
                style={[styles.container, styles.center, { borderRadius: 10 }]}
                colors={['#46aeff', '#5884ff']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={{ ...FONTS.h2, color: COLORS.white }}>BOOKING</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};
