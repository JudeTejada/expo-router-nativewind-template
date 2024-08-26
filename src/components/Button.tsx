import React from 'react';
import { Pressable, Text } from 'react-native';
import { twMerge } from 'tailwind-merge';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  onPress?: () => void;
  children: React.ReactNode;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  onPress,
  children,
  className
}) => {
  const baseStyles = 'py-3 rounded-md flex items-center justify-center ';
  const variantStyles = {
    primary: 'bg-slate-800 active:bg-blue-600',
    secondary: 'border border-slate-800 active:bg-blue-50'
  };
  const textStyles = {
    primary: 'text-white font-semibold',
    secondary: 'text-slate-800 font-semibold'
  };

  const baseTextStyle = 'text-lg font-bold';

  return (
    <Pressable
      onPress={onPress}
      className={twMerge(baseStyles, variantStyles[variant], className)}
    >
      <Text className={twMerge(baseTextStyle, textStyles[variant])}>
        {children}
      </Text>
    </Pressable>
  );
};
