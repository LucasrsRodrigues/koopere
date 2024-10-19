import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import Routes from './src/routes';
import theme from './src/global/themes/theme';
import * as Font from 'expo-font';
import Entypo from '@expo/vector-icons/Entypo';
import { useFonts, Inter_100Thin, Inter_200ExtraLight, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold, Inter_900Black } from "@expo-google-fonts/inter";
import { RedHatDisplay_400Regular } from "@expo-google-fonts/red-hat-display";
import * as SplashScreen from 'expo-splash-screen';


export default function App() {

  const [loadFonts] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
    RedHatDisplay_400Regular
  })

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
