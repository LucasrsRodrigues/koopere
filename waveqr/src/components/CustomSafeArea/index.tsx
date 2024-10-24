import React, { type ReactNode } from "react";
import { Platform, StatusBar } from "react-native";

import * as S from "./styles";
import { useTheme } from "styled-components/native";

interface ICustomSafeAreaProps {
	children: ReactNode;
	backgroundColor?: string;
  occupyEverything?: boolean;
  disablePadding?: boolean;
}

export function CustomSafeArea({
	children,
	backgroundColor,
  occupyEverything = false,
	disablePadding = false
}: ICustomSafeAreaProps) {
	const statusBarHeight =
		Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0;
	const theme = useTheme();

	return (
		<S.SafeAreaContainer
			customPadding={statusBarHeight}
			backgroundColor={backgroundColor}
      occupyEverything={occupyEverything}
			disablePadding={disablePadding}
		>
			<StatusBar
				translucent={true}
				backgroundColor={theme?.colors?.background}
			/>
			{children}
		</S.SafeAreaContainer>
	);
}
