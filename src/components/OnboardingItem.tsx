import { Text, View } from './Themed';
import { SCREEN_WIDTH } from '../utils/screen';

import { Image } from 'expo-image';
import { ImageBackground, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from './Button';
type Props = {
  image: any;
  title: string;
  tag: string;
  description: string;
  index: number;
};

export function OnboardingItem({
  description,
  image,
  index,
  tag,
  title
}: Props) {
  return (
    <View>
      <View className='relative' style={{ height: '60%' }}>
        <Image
          style={[
            StyleSheet.absoluteFillObject,
            {
              width: SCREEN_WIDTH,
              height: '100%'
            }
          ]}
          source={image}
        />
        <LinearGradient
          colors={['rgba(15,16,20,0)', 'white']}
          style={[
            {
              position: 'absolute',
              height: 200,
              left: 0,
              right: 0,
              bottom: 0
            }
          ]}
        />
      </View>

      <View className='flex items-center justify-center px-4 my-6'>
        <Text className='text-2xl font-semibold mb-2 text-slate-900'>
          {title}
        </Text>
        <Text className='text-lg font-medium text-slate-800'>{tag}</Text>
        <Text className='text-center mt-4 text-base text-slate-700 '>{description}</Text>
      </View>

      <View className='px-8 gap-4'>
        <Button> Play lesson 1</Button>
        <Button variant='secondary'> Watch trailer</Button>
      </View>
    </View>
  );
}
