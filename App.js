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
import Ball from './Animation/BoxOpacity_1/BoxOpacity_1';
import BoxOpacity_1 from './Animation/BoxOpacity_1/BoxOpacity_1';
import BoxTranslateXY_2 from './Animation/BoxTranslateXY_2/BoxTranslateXY_2';
import BoxScale_3 from './Animation/BoxScale_3/BoxScale_3';
import BoxHeightWidth_4 from './Animation/BoxHeightWidth_4/BoxHeightWidth_4';
import BoxAbsolutePosition_5 from './Animation/BoxAbsolutePosition_5/BoxAbsolutePosition_5';
import BoxTextColorInterpolation_6 from './Animation/BoxTextColorInterpolation_6/BoxTextColorInterpolation_6';
import BoxRotation_7 from './Animation/BoxRotation_7/BoxRotation_7';
import BoxHeightWidthInterpolation_8 from './Animation/BoxHeightWidthInterpolation_8/BoxHeightWidthInterpolation_8';

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
      <BoxHeightWidthInterpolation_8/>
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
