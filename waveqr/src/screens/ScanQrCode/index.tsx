import React, { useEffect, useRef, useState } from "react";

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
import Toast from "react-native-toast-message";
import useTypeSafeNavigation from "@hooks/navigation/useTypeSafeNavigation";

export function ScanQrCode() {
	const cameraRef = useRef<Camera>(null);
	const { navigate } = useTypeSafeNavigation();
	const device = useCameraDevice("back");
	const [isFlashOn, setIsFlashOn] = useState(false);

	const { hasPermission, requestPermission } = useCameraPermission();

	const codeScanner = useCodeScanner({
		codeTypes: ["qr", "ean-13"],
		onCodeScanned: (codes) => {
			const code = codes[0];
			navigate("ShowQrCode", {
				emv: code.value,
				type: "text",
			});
		},
	});

	function handleToggleFlash() {
		if (device?.hasTorch === false) {
			Toast.show({
				type: "error",
				text1: "O Flash não foi localizado.",
			});
			return;
		}

		if (device?.position === "front") {
			Toast.show({
				type: "error",
				text1: "Utilize a câmera traseira do celular para utilizar o flash.",
			});
			return;
		}

		setIsFlashOn((prev) => !prev);
	}

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
				torch={isFlashOn ? "on" : "off"}
			/>

			<S.CameraIn>
				<S.CameraInHeader>
					<S.CameraInHeaderText>
						Aponte a sua câmera para o QR Code
					</S.CameraInHeaderText>
				</S.CameraInHeader>

				<S.Scan />

				<S.FooterScan>
					<S.Button onPress={handleToggleFlash}>
						<S.Flash />
					</S.Button>
				</S.FooterScan>
			</S.CameraIn>
		</S.Container>
	);
}
