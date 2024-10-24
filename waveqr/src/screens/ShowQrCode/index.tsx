import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTheme } from "styled-components/native";
import type { Modalize } from "react-native-modalize";
import QRCode from "react-native-qrcode-svg";
import ViewShot from "react-native-view-shot";
import { useFocusEffect, useRoute } from "@react-navigation/native";

import { CustomSafeArea } from "@components/CustomSafeArea";
import { IconButton } from "@components/forms/IconButton";
import ArrowLeft from "@assets/icons/arrow-left.svg";

import HeartIcon from "@assets/icons/heart.svg";
import HeartSolidIcon from "@assets/icons/heart-solid.svg";

import MoreHorizontalIcon from "@assets/icons/more-horizontal.svg";
import EmvsRepository from "@backend/repositories/emvs/Emvs.repositories";

import * as S from "./styles";
import * as Linking from "expo-linking";

import useTypeSafeNavigation from "@hooks/navigation/useTypeSafeNavigation";
import useTypeSafeRoute from "@hooks/navigation/useTypeSafeRoute";
import type { EmvModel } from "@backend/database/models/emvModel";
import ModalOptions from "./components/ModalOptions";

const isLink = [
	"link",
	"instagram",
	"facebook",
	"twitter",
	"youtube",
	"spotify",
	"whatsapp",
	"phone",
	"sms",
	"location",
	"email",
];

export function ShowQrCode() {
	const modalizeRef = useRef<Modalize>(null);
	const viewShotRef = useRef<ViewShot>(null);

	const [qrCodeInfo, setQRCodeInfo] = useState({} as EmvModel);
	const [isFavourite, setIsFavourite] = useState(false);
	const { navigate } = useTypeSafeNavigation();
	const { params } = useTypeSafeRoute<"ShowQrCode">();
	const theme = useTheme();

	const onOpen = () => {
		modalizeRef.current?.open();
	};

	const onClose = () => {
		modalizeRef.current?.close();
	};

	async function addToFavorite() {
		try {
			await EmvsRepository.addToFavorites(params?.id);

			await fetchData();
		} catch (error) {
			console.log(error);
		}
	}

	async function fetchData() {
		try {
			const dataInfo = await EmvsRepository.getInfo(params?.id);
			setQRCodeInfo(dataInfo);
			setIsFavourite(dataInfo?.isFavourite);
		} catch (error) {
			console.log(error);
		}
	}

	async function handleOpenLink() {
		if (qrCodeInfo?.type === "link") {
			navigate("WebView", {
				url: qrCodeInfo?.value,
			});
		} else {
			Linking.openURL(qrCodeInfo?.value);
		}
	}

	const navigateToWeb = async () => {
		try {
			navigate("WebView", {
				url: `http://www.google.com.br/search?q=${qrCodeInfo?.value}`,
			});
		} catch (error) {
			
		}
	}

	async function takeScreenshot() {
		const uri = await viewShotRef.current?.capture();
		return uri;
	}

	useFocusEffect(
		useCallback(() => {
			fetchData();
		}, []),
	);

	return (
		<CustomSafeArea occupyEverything>
			<S.ShowQrCodeHeader>
				<IconButton icon={ArrowLeft} onPress={() => navigate("Dashboard")} />

				<S.HeaderTitle>QR Code Gerado</S.HeaderTitle>
			</S.ShowQrCodeHeader>

			<S.ShowQRCodeBody>
				<S.QRCodeType>Local na rede Internet</S.QRCodeType>

				<ViewShot
					ref={viewShotRef}
					style={{ backgroundColor: "#0a0a0a" }}
					options={{ format: "jpg", quality: 1 }}
				>
					<S.QRCodeWrapper>
						<QRCode size={200} value={params?.emv} />
					</S.QRCodeWrapper>
				</ViewShot>
			</S.ShowQRCodeBody>

			<S.ShowQRCodeFooter>
				<S.QrCodeOption>
					<S.QrCodeOptionButton onPress={addToFavorite}>
						{isFavourite ? (
							<HeartSolidIcon fill={theme.colors.primary} />
						) : (
							<HeartIcon stroke={theme.colors.primary} />
						)}
					</S.QrCodeOptionButton>

					<S.QrCodeOptionButton onPress={onOpen}>
						<MoreHorizontalIcon fill={theme.colors.primary} />
					</S.QrCodeOptionButton>
				</S.QrCodeOption>
			</S.ShowQRCodeFooter>

			{isLink.includes(params?.type) ? (
				<S.QRCodeEMVLinkButton onPress={handleOpenLink}>
					<S.QRCodeEMVLink
						style={{
							textDecorationLine: "underline",
							textDecorationColor: theme?.colors?.text,
						}}
					>
						{qrCodeInfo?.value}
					</S.QRCodeEMVLink>
				</S.QRCodeEMVLinkButton>
			) : (
				<S.QRCodeEMV>{qrCodeInfo?.value}</S.QRCodeEMV>
			)}

			<ModalOptions
				ref={modalizeRef}
				handleClose={onClose}
				takeScreenshot={takeScreenshot}
				navigateToWeb={navigateToWeb}
			/>
		</CustomSafeArea>
	);
}
