import { useRoute, type RouteProp } from "@react-navigation/native";
import type { RouteParams } from "./types";

function useTypeSafeRoute<T extends keyof RouteParams>() {
	const route = useRoute<RouteProp<RouteParams, T>>();

	return route;
}

export default useTypeSafeRoute;
