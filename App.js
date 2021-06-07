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
import AddExtraAnimation_3 from './Animation/Animation+Gesture/AddExtraAnimation_3/AddExtraAnimation_3';
import DivideAnimationLength_4 from './Animation/Animation+Gesture/DivideAnimationLength_4/DivideAnimationLength_4';
import MultiplyAnimationLength_5
  from './Animation/Animation+Gesture/MultiplyAnimationLength_5/MultiplyAnimationLength_5';
import ParallelAnimation_1 from './Animation/CombinationAnimations/ParallelAnimation_1/ParallelAnimation_1';
import SequenceAnimation_2 from './Animation/CombinationAnimations/SequenceAnimation_2/SequenceAnimation_2';
import StaggerAnimation_3 from './Animation/CombinationAnimations/StaggerAnimation_3/StaggerAnimation_3';
import DelayBetweenDiffAnimation_4
  from './Animation/CombinationAnimations/DelayBetweenDiffAnimation_4/DelayBetweenDiffAnimation_4';
import TranslateOpacityInterpolate_1
  from './Animation/Interpolation4/TranslateOpacityInterpolate_1/TranslateOpacityInterpolate_1';
import BackgroundColorInterpolate_2
  from './Animation/Interpolation4/BackgroundColorInterpolate_2/BackgroundColorInterpolate_2';
import RotationTypesInterpolate_3
  from './Animation/Interpolation4/RotationTypesInterpolate_3/RotationTypesInterpolate_3';
import Point99Cliff from './Animation/AnimationTechnique_5/Point99Cliff/Point99Cliff';
import CornerBox from './Animation/AnimationTechnique_5/CornerBox/CornerBox';

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
      {/*<MoveBoxGestureDecay_2/>*/}
      {/*<AddExtraAnimation_3/>*/}
      {/*<DivideAnimationLength_4/>*/}
      {/*<MultiplyAnimationLength_5/>*/}
      {/*<ParallelAnimation_1/>*/}
      {/*<SequenceAnimation_2/>*/}
      {/*<StaggerAnimation_3/>*/}
      {/*<DelayBetweenDiffAnimation_4/>*/}


      {/*<TranslateOpacityInterpolate_1/>*/}
      {/*<BackgroundColorInterpolate_2/>*/}
      {/*<RotationTypesInterpolate_3/>*/}


      {/*<Point99Cliff/>*/}
      <CornerBox/>


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
