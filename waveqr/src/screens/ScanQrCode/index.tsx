import React, { useEffect, useRef } from "react";

import * as S from "./styles";
import {
	 Camera,
	useCameraDevice,
	useCameraPermission,
	useCodeScanner,
} from "react-native-vision-camera";
import { StyleSheet } from "react-native";
import { PermissionsScreen } from "./components/PermissionsScreen";
import { DeviceScreen } from "./components/DeviceScreen";

export function ScanQrCode() {
	const cameraRef = useRef<Camera>(null);
	const device = useCameraDevice("back");
	const { hasPermission, requestPermission } = useCameraPermission();

	const codeScanner = useCodeScanner({
		codeTypes: ["qr", "ean-13"],
		onCodeScanned: (codes) => {},
	});

	if (!hasPermission) {
		return <PermissionsScreen />;
	}

	if (device === null || device === undefined) {
		return <DeviceScreen />;
	}

	return (
		<S.Container>
			<Camera
				style={StyleSheet.absoluteFill}
				device={device}
				isActive={true}
				resizeMode="cover"
				codeScanner={codeScanner}
			/>

			<S.CameraIn>
				<S.CameraInHeader>
					<S.CameraInHeaderText>Scan Qr Code</S.CameraInHeaderText>
				</S.CameraInHeader>

				<S.Scan />

				<S.FooterScan>
					<S.Button onPress={() => {}}>
						<S.GoBack />
					</S.Button>

					<S.Button onPress={() => {}}>
						<S.Flash />
					</S.Button>
				</S.FooterScan>
			</S.CameraIn>
		</S.Container>
	);
}
