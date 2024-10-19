import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ListQRCode } from "../screens/ListQRCode";
import { FormQrCode } from "@screens/CreateQRCode/FormQrCode/inde";
import { ChoiceQrCodeType } from "@screens/CreateQRCode/ChoiceQrCodeType";

const { Navigator, Screen } = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="CreateQRCode"
      >
        <Screen name="ListQRCode" component={ListQRCode} />

        <Screen name="CreateQRCode" component={ChoiceQrCodeType} />
        <Screen name="FormQrCode" component={FormQrCode} />
      </Navigator>
    </NavigationContainer>
  )
}