import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {height, width} from '../../helpers/Index';
import {Ionicons, MaterialIcons} from '../../helpers/Icons';
import Styles from '../../helpers/Styles';
import CircularProgressBar from '../../components/CircularProgressBar';

const PlantDetails = ({
  navigation,
  route: {
    params: {item},
  },
}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#004b3f'}}>
      <View style={styles.top}>
        <View style={{width: '55%'}}>
          <MaterialIcons
            name="keyboard-backspace"
            color="#333"
            size={width(7)}
            onPress={() => navigation.goBack()}
          />
          <Text
            style={{
              ...Styles.text('#333', 4),
              fontWeight: '600',
              marginTop: height(2),
            }}>
            {item.name}
          </Text>
          <Text style={{...Styles.text('#333', 1.8), fontWeight: '200'}}>
            {item.specie}
          </Text>
          <Text style={styles.textType}>{item.type}</Text>
        </View>
        <View
          style={{
            width: '45%',
          }}>
          <Image
            source={item.image}
            resizeMode="stretch"
            style={{
              width: '100%',
              height: '100%',
              alignSelf: 'flex-end',
            }}
          />
        </View>
      </View>
      <Text
        style={{
          ...Styles.text('#fff', 2.7),
          marginTop: height(3),
          marginLeft: height(3),
        }}>
        Plant Care
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: height(2),
        }}>
        <View
          style={{
            height: height(20),
            justifyContent: 'space-evenly',
            marginLeft: height(3),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons
              name="water-outline"
              size={width(4)}
              color="#8cbfb8"
              style={{
                backgroundColor: 'rgba(255,255,255, 0.1)',
                borderRadius: 50,
                padding: 6,
                marginRight: 10,
              }}
            />
            <Text style={{...Styles.text('#8cbfb8', 1.8), fontWeight: '200'}}>
              Every 3 weeks
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons
              name="sunny-outline"
              size={width(4)}
              color="#8cbfb8"
              style={{
                backgroundColor: 'rgba(255,255,255, 0.1)',
                borderRadius: 50,
                padding: 6,
                marginRight: 10,
              }}
            />
            <Text style={{...Styles.text('#8cbfb8', 1.8), fontWeight: '200'}}>
              Natural Light
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons
              name="thermometer-outline"
              size={width(4)}
              color="#8cbfb8"
              style={{
                backgroundColor: 'rgba(255,255,255, 0.1)',
                borderRadius: 50,
                padding: 6,
                marginRight: 10,
              }}
            />
            <Text style={{...Styles.text('#8cbfb8', 1.8), fontWeight: '200'}}>
              Minimum of 7°c
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            width: width(40),
            alignItems: 'center',
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
            height: height(20),
            justifyContent: 'space-evenly',
          }}>
          <Text style={{...Styles.text('#8cbfb8', 1.8), fontWeight: '200'}}>
            Next watering
          </Text>
          <CircularProgressBar
            percentage={item.plantValue}
            color="#fff"
            textColor="#333"
            maxValue={10}
            width={90}
          />
        </View>
      </View>
      <View
        style={{
          margin: height(3),
        }}>
        <Text
          style={{
            ...Styles.text('#fff', 3),
            fontWeight: '700',
            marginVertical: height(1),
          }}>
          Information
        </Text>
        <Text
          style={{
            ...Styles.text('#8cbfb8', 1.8),
            fontWeight: '200',
            lineHeight: 22,
          }}>
          {item.description}
        </Text>
      </View>
    </View>
  );
};

export default PlantDetails;

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#fff',
    paddingLeft: height(3),
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    paddingTop: height(2),
    flexDirection: 'row',
    height: '30%',
    justifyContent: 'space-between',
    overflow: 'hidden',
    width: width(100),
  },
  textType: {
    ...Styles.text('#63ac9b', 1.5),
    backgroundColor: '#d7e8e2',
    marginTop: height(3),
    borderRadius: 50,
    width: '50%',
    textAlign: 'center',
    lineHeight: 15,
  },
});
