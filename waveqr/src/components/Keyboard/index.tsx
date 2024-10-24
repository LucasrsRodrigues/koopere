import React, { type ReactNode } from 'react';
import { KeyboardAvoidingView, Platform, Keyboard as RNKeyboard, Pressable } from 'react-native';

interface IKeyboardProps {
  children: ReactNode;
}

export function Keyboard({ children }: IKeyboardProps) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1,
      }}
    >
      <Pressable
        onPress={RNKeyboard.dismiss}
        style={{
          flex: 1,
          gap: 10
        }}
      >
        {children}
      </Pressable>
    </KeyboardAvoidingView>
  );
}