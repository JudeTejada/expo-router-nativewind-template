import { StyleSheet } from 'react-native';
import { View } from './Themed';
import { SCREEN_WIDTH } from '../utils/screen';
import { LinearGradient } from 'expo-linear-gradient';

export function Gradient() {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        { width: SCREEN_WIDTH, height: SCREEN_WIDTH, zIndex: 1 }
      ]}
    >
      <LinearGradient
        colors={['rgba(15,16,20,0)', 'white']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 180,
          zIndex: 1
        }}
      />
    </View>
  );
}
