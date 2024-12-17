import React, { useCallback } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChoiceQrCodeType } from "@screens/CreateQRCode/ChoiceQrCodeType";
import { Favorites } from "@screens/Favorites";
import { History } from "@screens/History";

import Foundation from "@expo/vector-icons/Foundation";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useTheme } from "styled-components/native";
import { ScanQrCode } from "@screens/ScanQrCode";
import { useFocusEffect } from "@react-navigation/native";
import { hasUnsyncedChanges } from "@nozbe/watermelondb/sync";
import { database } from "@backend/database";

const { Navigator, Screen } = createBottomTabNavigator();

export default function TabRoutes() {
	const theme = useTheme();

	return (
		<Navigator
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: theme?.colors?.primary,
				tabBarInactiveTintColor: theme?.colors?.icon,
				tabBarStyle: {
					backgroundColor: theme?.colors?.shape,
				},
			}}
		>
			<Screen
				name="ChoiceQrCodeType"
				options={{
					title: "Generate",
					tabBarIcon: ({ color, focused, size }) => {
						return <Foundation name="home" size={size} color={color} />;
					},
				}}
				component={ChoiceQrCodeType}
			/>
			<Screen
				name="Scan"
				options={{
					title: "Scan",
					tabBarIcon: ({ color, focused, size }) => {
						return (
							<MaterialIcons name="qr-code-scanner" size={size} color={color} />
						);
					},
				}}
				component={ScanQrCode}
			/>
			<Screen
				name="Favorites"
				options={{
					title: "Favorites",
					tabBarIcon: ({ color, focused, size }) => {
						return <Ionicons name="heart" size={size} color={color} />;
					},
				}}
				component={Favorites}
			/>
			<Screen
				name="History"
				options={{
					title: "History",
					tabBarIcon: ({ color, focused, size }) => {
						return (
							<MaterialCommunityIcons
								name="history"
								size={size}
								color={color}
							/>
						);
					},
				}}
				component={History}
			/>
		</Navigator>
	);
}
