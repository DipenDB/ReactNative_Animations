/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import BoxOpacity_1 from './Animation/Animation/BoxOpacity_1/BoxOpacity_1';
import BoxTranslateXY_2 from './Animation/Animation/BoxTranslateXY_2/BoxTranslateXY_2';
import BoxScale_3 from './Animation/Animation/BoxScale_3/BoxScale_3';
import BoxHeightWidth_4 from './Animation/Animation/BoxHeightWidth_4/BoxHeightWidth_4';
import BoxAbsolutePosition_5 from './Animation/Animation/BoxAbsolutePosition_5/BoxAbsolutePosition_5';
import BoxTextColorInterpolation_6 from './Animation/Animation/BoxTextColorInterpolation_6/BoxTextColorInterpolation_6';
import BoxRotation_7 from './Animation/Animation/BoxRotation_7/BoxRotation_7';
import BoxHeightWidthInterpolation_8
  from './Animation/Animation/BoxHeightWidthInterpolation_8/BoxHeightWidthInterpolation_8';
import BoxEasing_9 from './Animation/Animation/BoxEasing_9/BoxEasing_9';
import BoxSpring_10 from './Animation/Animation/BoxSpring_10/BoxSpring_10';
import BackgroundColorChange_1 from './Animation/Animation+Gesture/BackgroundColorChange_1/BackgroundColorChange_1';
import MoveBoxGestureDecay_2 from './Animation/Animation+Gesture/MoveBoxGestureDecay_2/MoveBoxGestureDecay_2';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/*<BoxOpacity_1/>*/}
      {/*<BoxTranslateXY_2/>*/}
      {/*<BoxScale_3/>*/}
      {/*<BoxHeightWidth_4/>*/}
      {/*<BoxAbsolutePosition_5/>*/}
      {/*<BoxTextColorInterpolation_6/>*/}
      {/*<BoxRotation_7/>*/}
      {/*<BoxHeightWidthInterpolation_8/>*/}
      {/*<BoxEasing_9/>*/}
      {/*<BoxSpring_10/>*/}


      {/*<BackgroundColorChange_1/>*/}
      <MoveBoxGestureDecay_2/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    // backgroundColor:'red',
  },
});

export default App;
