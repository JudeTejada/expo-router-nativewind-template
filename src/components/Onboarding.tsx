import { Image, Pressable, ScrollView, StyleSheet } from 'react-native';
import { View } from './Themed';
import { mockData } from '@/mockData';
import { OnboardingItem } from './OnboardingItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SCREEN_WIDTH } from '../utils/screen';
import { Fragment, useEffect, useRef, useState } from 'react';
import { BlurView } from 'expo-blur';
import { StatusBar } from 'expo-status-bar';
import { Gradient } from './Gradient';
import { useSharedValue } from 'react-native-reanimated';

export function OnboardingScreen() {
  const insets = useSafeAreaInsets();
  const [index, setIndex] = useState(0);
  const scrollViewRef = useRef(null);
  const scrollX = useSharedValue(0);

  console.log({ index, scrollX });
  const handleScroll = (direction: 'left' | 'right') => {
    const newPage = index + (direction === 'right' ? 1 : -1);

    if (newPage === mockData.length - 1) {
      setTimeout(() => {
        // Scroll to the new position with animation
        scrollViewRef.current?.scrollTo({
          x: 0,
          y: 0,
          animated: true
        });
      }, 200); // Delay of 400ms before scrolling
    }
    // Check if the new page is within the valid range
    if (newPage >= 0 && newPage < mockData.length) {
      // Update the active page state
      setIndex(newPage);
      // Calculate the new scroll position based on screen width and page number
      const newScrollX = SCREEN_WIDTH * newPage;
      // Update the shared value for scroll position
      scrollX.value = newScrollX;

      // Use setTimeout to delay the scroll action
      setTimeout(() => {
        // Scroll to the new position with animation
        scrollViewRef.current?.scrollTo({
          x: newScrollX,
          y: 0,
          animated: true
        });
      }, 200); // Delay of 400ms before scrolling
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      handleScroll('right');
    }, 1000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <View className='relative h-screen'>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1,
          backgroundColor: 'transparent',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 16,
          paddingTop: insets.top
        }}
      >
        <BlurView
          intensity={40}
          tint='light'
          style={{
            justifyContent: 'center',
            overflow: 'hidden',
            borderRadius: 4
          }}
        >
          <Pressable className='p-2   rounded-lg'>
            <AntDesign name='close' size={16} color='white' />
          </Pressable>
        </BlurView>

        <BlurView
          intensity={40}
          tint='light'
          style={{
            justifyContent: 'center',
            overflow: 'hidden',
            borderRadius: 4
          }}
        >
          <Pressable className='p-2   rounded-lg'>
            <Feather name='more-horizontal' size={16} color='white' />
          </Pressable>
        </BlurView>
      </View>

      <ScrollView pagingEnabled horizontal ref={scrollViewRef}
      s
      >
        {mockData.map((item, index) => (
          <View key={index} className='relative w-screen flex-1'>
            <OnboardingItem {...item} index={index} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
