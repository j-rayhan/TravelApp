import React from 'react';
import { Button, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTS, icons, images, SIZES, styles } from '../constants';
import { ROUTES } from '../navigation/Routes';
const destinations = [
  {
    id: 0,
    name: 'Ski Villa',
    img: images.skiVilla ,
  },
  {
    id: 1,
    name: 'Climbing Hills',
    img: images.climbingHills ,
  },
  {
    id: 2,
    name: 'Frozen Hills',
    img: images.frozenHills ,
  },
  {
    id: 3,
    name: 'Beach',
    img: images.beach ,
  },
]
const OptionItem = ({ icon, bgColor, label, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, styles.center]}
      onPress={onPress}
    >
      <View style={[styles.shadow, { width: 60, height: 60 }]}>
        <LinearGradient
          style={[styles.container, styles.center, { borderRadius: 15 }]}
          colors={bgColor}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <Image
            source={icon}
            resizeMode="cover"
            style={{
              width: 30,
              height: 30,
              tintColor: COLORS.white,
            }}
          />
        </LinearGradient>
      </View>
      <Text style={{ ...FONTS.body3, marginTop: SIZES.base, color: COLORS.gray }}>{label}</Text>
    </TouchableOpacity>
  )
}
export default ({ navigation }) => {
  const renderDestination = (item, index) => {
    let destinationStyle = {}
    if (index===0) {
      destinationStyle = { marginLeft: SIZES.padding}
    }
    return (
      <TouchableOpacity
        style={{justifyContent: 'center', marginHorizontal: SIZES.base, ...destinationStyle}}
        onPress={() => navigation.navigate(ROUTES.DESTINATION_SCREEN)}
        >
          <Image
            source={item.img}
            resizeMode="cover"
            style={{
              width: SIZES.width * 0.28,
              height: '82%',
              borderRadius: 15
            }}
          />
          <Text style={{...FONTS.h4, marginTop: SIZES.base /2}}>
            {item.name}
          </Text>
        </TouchableOpacity>
    )
  }
  return (
    <View style={[styles.container, { backgroundColor: COLORS.white }]}>
      {/* Banner */}
      <View style={{ ...styles.container, marginTop: SIZES.base, paddingHorizontal: SIZES.padding }}>
        <Image
          source={images.homeBanner}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 15,
          }}
        />
      </View>
      {/* Options */}
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row', marginTop: SIZES.padding, paddingHorizontal: SIZES.base }}>
          <OptionItem
            icon={icons.airplane}
            bgColor={['#46aeff', '#5884ff']}
            label="Flight"
            onPress={() => { }}
          />
          <OptionItem
            icon={icons.train}
            bgColor={['#fbbf90', '#fcda13']}
            label="Train"
            onPress={() => { }}
          />
          <OptionItem
            icon={icons.bus}
            bgColor={['#e973ad', '#da5df2']}
            label="Bus"
            onPress={() => { }}
          />
          <OptionItem
            icon={icons.taxi}
            bgColor={['#fcaba8', '#fe6bba']}
            label="Taxi"
            onPress={() => { }}
          />
        </View>
        <View style={{ flexDirection: 'row', marginTop: SIZES.radius, paddingHorizontal: SIZES.base }}>
          <OptionItem
            icon={icons.bed}
            bgColor={['#ffc465', '#ff0c5f']}
            label="Hotel"
            onPress={() => { }}
          />
          <OptionItem
            icon={icons.eat}
            bgColor={['#7cf1fb', '#fcda13']}
            label="Eats"
            onPress={() => { }}
          />
          <OptionItem
            icon={icons.compass}
            bgColor={['#7be933', '#da5df2']}
            label="Adventure"
            onPress={() => { }}
          />
          <OptionItem
            icon={icons.event}
            bgColor={['#fca397', '#fcf76c']}
            label="Event"
            onPress={() => { }}
          />
        </View>
      </View>
      {/* Destinations */}
      <View style={{flex: 1}}>
        <Text style={{marginTop: SIZES.base, marginHorizontal: SIZES.padding, ...FONTS.h2}}>Destination</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={destinations}
          keyExtractor={item => item.id + ''}
          renderItem={({item, index}) => renderDestination(item,index)}
        />
      </View>
    </View>
  );
};
