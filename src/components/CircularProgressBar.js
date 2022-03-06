import {StyleSheet, Text, View, Animated, TextInput} from 'react-native';
import React, {useRef} from 'react';
import Svg, {G, Circle} from 'react-native-svg';
import {height} from '../helpers/Index';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedInput = Animated.createAnimatedComponent(TextInput);

const CircularProgressBar = ({
  percentage,
  color,
  textColor,
  maxValue,
  width,
}) => {
  const circleRef = useRef();
  const inputRef = useRef();

  const raduis = width;
  const strokeWidth = 15;
  const duration = 500;
  const delay = 50;
  const halfCircle = width + (width / 10) * 2;
  const circumference = 2 * Math.PI * raduis;

  const animatedValue = useRef(new Animated.Value(0)).current;

  const animation = toValue => {
    return Animated.timing(animatedValue, {
      toValue,
      duration: duration,
      delay: delay,
      useNativeDriver: true,
    }).start();
  };

  React.useEffect(() => {
    animation(percentage);

    animatedValue.addListener(v => {
      // console.log(v);
      if (circleRef?.current) {
        const maxPercentage = (100 * v.value) / maxValue;
        const strokeDashoffset =
          circumference - (circumference * maxPercentage) / 100;
        circleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }

      if (inputRef?.current) {
        inputRef.current.setNativeProps({
          text: `${Math.round(v.value)}`,
        });
      }
    });
    return () => {
      animatedValue.removeAllListeners();
    };
  }, [maxValue, percentage]);

  return (
    <View>
      <Svg
        width={raduis}
        height={raduis}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
        <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            cx="50%"
            cy="50%"
            stroke={color}
            strokeWidth={strokeWidth}
            r={raduis}
            strokeOpacity={0.2}
            fill="transparent"
          />
          <AnimatedCircle
            ref={circleRef}
            cx="50%"
            cy="50%"
            stroke={color}
            strokeWidth={strokeWidth}
            r={raduis}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            strokeLinecap="round"
          />
        </G>
      </Svg>
      <AnimatedInput
        ref={inputRef}
        underlineColorAndroid="transparent"
        editable={false}
        defaultValue="0"
        style={[
          StyleSheet.absoluteFillObject,
          {
            fontSize: raduis / 4,
            color,
            fontWeight: '100',
            textAlign: 'center',
            marginTop: -15,
          },
        ]}
      />
      <Text
        style={[
          StyleSheet.absoluteFillObject,
          {
            fontSize: 10,
            color,
            fontWeight: '100',
            textAlign: 'center',
            marginTop: height(7),
          },
        ]}>
        Days
      </Text>
    </View>
  );
};

export default CircularProgressBar;

const styles = StyleSheet.create({});
