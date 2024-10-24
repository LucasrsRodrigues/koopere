import React, { type ReactNode } from "react";
import type { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";

import AntDesign from "@expo/vector-icons/AntDesign";
import useTypeSafeNavigation from "@hooks/navigation/useTypeSafeNavigation";
import * as S from "./styles";

interface IQrCodeTypeCardProps extends TouchableOpacityProps {
	icon: ReactNode;
	label: string;
	type: string;
}

export function QrCodeTypeCard({
	icon,
	label,
	type,
	...rest
}: IQrCodeTypeCardProps) {
	const theme = useTheme();
	const { navigate } = useTypeSafeNavigation();

	return (
		<S.Container
			onPress={() =>
				navigate("FormQrCode", {
					type,
				})
			}
			{...rest}
		>
			{icon && icon}

			<S.QrCodeTypeCardText>{label}</S.QrCodeTypeCardText>

			<AntDesign name="arrowright" size={24} color={theme?.colors?.primary} />
		</S.Container>
	);
}
