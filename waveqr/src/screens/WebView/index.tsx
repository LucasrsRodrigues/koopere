import React from "react";

import * as S from "./styles";
import useTypeSafeRoute from "@hooks/navigation/useTypeSafeRoute";
import useTypeSafeNavigation from "@hooks/navigation/useTypeSafeNavigation";

import ArrowLeft from "@assets/icons/arrow-left.svg";
import { IconButton } from "@components/forms/IconButton";
import { CustomSafeArea } from "@components/CustomSafeArea";

export function WebView() {
	const { params } = useTypeSafeRoute<"WebView">();
	const { goBack } = useTypeSafeNavigation();

	return (
		<CustomSafeArea occupyEverything disablePadding>
      
      <S.WebViewHeader>
				<IconButton icon={ArrowLeft} onPress={goBack} />

				<S.HeaderTitle>Link do QR Code</S.HeaderTitle>
			</S.WebViewHeader>

			<S.Web source={{ uri: params?.url }} />
    </CustomSafeArea>
	);
}
