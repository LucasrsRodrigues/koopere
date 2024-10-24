import React, { forwardRef, useRef } from "react";
import { Modalize } from "react-native-modalize"; // Supondo que você esteja usando esse pacote
import { useTheme } from "styled-components/native";
import * as FileSystem from "expo-file-system";
import * as Crypto from "expo-crypto";

type IModalOptionsProps = {
	handleClose: () => void;
	takeScreenshot: () => string;
	navigateToWeb: () => void;
};

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { AntDesign, Fontisto } from "@expo/vector-icons";
import * as Sharing from "expo-sharing";
import { Platform } from "react-native";

import * as S from "./styles";

const ModalOptions = forwardRef<Modalize, IModalOptionsProps>(
	({ handleClose, takeScreenshot, navigateToWeb }, ref) => {
		const theme = useTheme();

		const captureAndShare = async () => {
			try {
				const uri = await takeScreenshot();
				const isAvailable = await Sharing.isAvailableAsync();

				if (isAvailable) {
					await Sharing.shareAsync(uri)
						.then(() => handleClose())
						.catch(() => handleClose());
				} else {
					alert("Compartilhamento não disponível");
				}
			} catch (error) {
				console.error("Erro ao capturar ou compartilhar a imagem: ", error);
			} finally {
			}
		};

		const download = async () => {
			try {
				const uri = await takeScreenshot();
				const filename = Crypto.randomUUID();
				const mimetype = "image/jpg";

				if (Platform.OS === "android") {
					const permissions =
						await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();

					if (permissions.granted) {
						const base64 = await FileSystem.readAsStringAsync(uri, {
							encoding: FileSystem.EncodingType.Base64,
						});

						await FileSystem.StorageAccessFramework.createFileAsync(
							permissions.directoryUri,
							filename,
							mimetype,
						)
							.then(async (uri) => {
								await FileSystem.writeAsStringAsync(uri, base64, {
									encoding: FileSystem.EncodingType.Base64,
								});
							})
							.catch((e) => console.log(e));
					} else {
						Sharing.shareAsync(uri);
					}
				} else {
					Sharing.shareAsync(uri);
				}

				console.log(result);
			} catch (error) {
				console.log(error);
			}
		};

		return (
			<Modalize
				ref={ref}
				modalHeight={300}
				handlePosition="inside"
				modalStyle={{
					backgroundColor: theme.colors.shape,
				}}
				handleStyle={{
					backgroundColor: theme.colors.text,
				}}
			>
				<S.ModalOptionContainer>
					<S.ModalOptionButton onPress={download}>
						<FontAwesome5
							name="images"
							size={24}
							color={theme?.colors?.primary}
						/>

						<S.ModalOptionButtonText>Salvar na galeria</S.ModalOptionButtonText>
					</S.ModalOptionButton>

					<S.ModalOptionButton onPress={captureAndShare}>
						<AntDesign
							name="sharealt"
							size={24}
							color={theme?.colors?.primary}
						/>

						<S.ModalOptionButtonText>Compartilhar</S.ModalOptionButtonText>
					</S.ModalOptionButton>

					<S.ModalOptionButton onPress={navigateToWeb}>
						<Fontisto name="search" size={24} color={theme?.colors?.primary} />

						<S.ModalOptionButtonText>Procurar na Web</S.ModalOptionButtonText>
					</S.ModalOptionButton>
				</S.ModalOptionContainer>
			</Modalize>
		);
	},
);

export default ModalOptions;
