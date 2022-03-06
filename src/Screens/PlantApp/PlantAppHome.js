import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {height, width} from '../../helpers/Index';
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
} from '../../helpers/Icons';
import Styles from '../../helpers/Styles';

const PlantAppHome = ({navigation}) => {
  const plants = [
    {
      name: 'Diego',
      specie: 'Euphorbia Eritea',
      type: 'Healthy',
      image: require('../../assets/diego.png'),
      plantValue: 7,
      description:
        'Euphorbia erythraea is a succulent plant in the family Euphorbiaceae. It is found in Ethiopia, Eritrea, Sudan and Somalia, where it grows on well-drained rocky slopes with montane evergreen forests',
    },
    {
      name: 'Cassy',
      specie: 'Strelitzia nicolai',
      type: 'warning',
      image: require('../../assets/cassy.png'),
      plantValue: 10,
      description:
        'Strelitzia nicolai, commonly known as the wild banana or giant white bird of paradise, is a species of banana-like plants with erect woody stems reaching a height of 6 m (20 ft), and the clumps formed can spread as far as 3.5 m (11 ft)',
    },
    {
      name: 'Luna',
      specie: 'Aloe Vera',
      type: 'Healthy',
      image: require('../../assets/aloevera.png'),
      plantValue: 4,
      description:
        'Aloe vera is a succulent plant species of the genus Aloe. Having some 500 species, Aloe is widely distributed, and is considered an invasive species in many world regions.',
    },
  ];

  const PlantItem = props => {
    const {item} = props;
    return (
      <TouchableOpacity
        style={styles.plantsContainer}
        onPress={() =>
          navigation.navigate('PlantDetails', {
            item,
          })
        }>
        <Image
          source={item.image}
          style={{width: '30%', height: height(16), alignSelf: 'flex-end'}}
          resizeMode="stretch"
        />
        <View
          style={{
            width: '55%',
            paddingVertical: height(2),
          }}>
          <Text style={{...Styles.text('#fff', 2.2), fontWeight: '600'}}>
            {item.name}
          </Text>
          <Text style={{...Styles.text('#8cbfb8', 1.8), fontWeight: '200'}}>
            {item.specie}
          </Text>
          <Text
            style={
              item.type === 'warning' ? styles.textTypewarn : styles.textType
            }>
            {item.type === 'warning' ? (
              <Ionicons name="water-outline" style={{marginRight: -10}} />
            ) : null}{' '}
            {item.type}
          </Text>
          <MaterialIcons
            name="keyboard-backspace"
            color="#fff"
            size={width(6)}
            style={styles.spaceIcon}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1, paddingTop: height(3)}}>
      <MaterialCommunityIcons
        name="sort-variant"
        size={width(9)}
        style={{
          marginLeft: height(2),
        }}
      />
      <Image
        source={require('../../assets/backgroundLeaf.png')}
        style={{position: 'absolute', right: 0}}
        resizeMode="contain"
      />
      <Text style={styles.topText}>My plants</Text>
      <FlatList
        data={plants}
        renderItem={({item}) => <PlantItem item={item} />}
        keyExtractor={(i, index) => `${index}`}
      />
    </View>
  );
};

export default PlantAppHome;

const styles = StyleSheet.create({
  topText: {
    ...Styles.text('#070707', 4),
    fontWeight: '700',
    marginVertical: height(3),
    marginLeft: height(2),
  },
  plantsContainer: {
    flexDirection: 'row',
    backgroundColor: '#004b3f',
    marginVertical: height(2),
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    width: '90%',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },
  textType: {
    ...Styles.text('#63ac9b', 1.5),
    backgroundColor: '#196356',
    marginTop: 10,
    borderRadius: 50,
    width: '50%',
    textAlign: 'center',
    lineHeight: 15,
  },
  textTypewarn: {
    ...Styles.text('#999a3c', 1.5),
    backgroundColor: 'rgba(153, 154, 60, 0.2)',
    marginTop: 10,
    borderRadius: 50,
    width: '50%',
    textAlign: 'center',
    lineHeight: 15,
  },
  spaceIcon: {
    transform: [
      {
        rotate: '180deg',
      },
    ],
    marginRight: 20,
    marginTop: height(3),
  },
});
