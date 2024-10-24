import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RouteParams } from "./types";
import { useNavigation } from "@react-navigation/native";

type NavigationProp = NativeStackNavigationProp<RouteParams, keyof RouteParams>;

function useTypeSafeNavigation() {
  const navigation = useNavigation<NavigationProp>();

  return navigation;
}

export default useTypeSafeNavigation;
