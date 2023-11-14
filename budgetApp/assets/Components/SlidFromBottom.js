import { TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';
import { Easing } from 'react-native-reanimated';

const SlideFromBottom = () => {
  const transitionSpec = {
    animation: 'timing',
    config: {
      duration: 500,
      easing: Easing.inOut(Easing.exp),
    },
  };

  return {
    gestureDirection: 'vertical',
    transitionSpec,
    headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  };
};

export default SlideFromBottom;