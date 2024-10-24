import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ListQRCode } from "../screens/ListQRCode";
import { FormQrCode } from "@screens/CreateQRCode/FormQrCode";
import { ChoiceQrCodeType } from "@screens/CreateQRCode/ChoiceQrCodeType";
import { ShowQrCode } from "@screens/ShowQrCode";
import TabRoutes from "./tabs.routes";
import { WebView } from "@screens/WebView";

const { Navigator, Screen } = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Screen name="Dashboard" component={TabRoutes} />
        <Screen name="ListQRCode" component={ListQRCode} />

        <Screen name="CreateQRCode" component={ChoiceQrCodeType} />
        <Screen name="FormQrCode" component={FormQrCode} />

        <Screen name="ShowQrCode" component={ShowQrCode} />

        <Screen name="WebView" component={WebView} />
      </Navigator>
    </NavigationContainer>
  )
}