import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ListQRCode } from "../screens/ListQRCode";
import { CreateQRCode } from "../screens/CreateQRCode";

const { Navigator, Screen } = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="ListQRCode" component={ListQRCode} />
        <Screen name="CreateQRCode" component={CreateQRCode} />
      </Navigator>
    </NavigationContainer>
  )
}