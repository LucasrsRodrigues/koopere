import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Routes from "./src/routes";
import theme from "./src/global/themes/theme";
import {
	useFonts,
	Inter_100Thin,
	Inter_200ExtraLight,
	Inter_300Light,
	Inter_400Regular,
	Inter_500Medium,
	Inter_600SemiBold,
	Inter_700Bold,
	Inter_800ExtraBold,
	Inter_900Black,
} from "@expo-google-fonts/inter";
import { RedHatDisplay_400Regular } from "@expo-google-fonts/red-hat-display";
import Toast from "react-native-toast-message";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { syncDatabase } from "@backend/database/sync";
import { database } from "@backend/database";

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
		RedHatDisplay_400Regular,
	});

	const startSync = async () => {
		try {
			await syncDatabase(database);
			console.log("Database synchronized successfully.");
		} catch (error) {
			console.error("Error during database synchronization:", error);
		}
	};

	useEffect(() => {
		startSync();
	}, [database]);

	return (
		<ThemeProvider theme={theme}>
			<GestureHandlerRootView>
				<Routes />
				<Toast />
			</GestureHandlerRootView>
		</ThemeProvider>
	);
}
