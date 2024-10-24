import React, { useCallback, useEffect, useState } from "react";

import { CustomSafeArea } from "@components/CustomSafeArea";
import { Input } from "@components/forms/Input";
import ArrowRight from "@assets/icons/arrow-right.svg";
import AntDesign from '@expo/vector-icons/AntDesign';
import * as S from "./styles";
import EmvsRepository from "@backend/repositories/emvs/Emvs.repositories";
import { useTheme } from "styled-components/native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import type { EmvModel } from "@backend/database/models/emvModel";
import useTypeSafeNavigation from "@hooks/navigation/useTypeSafeNavigation";
import { QrCodeItem } from "@components/QrCodeItem";

export function Favorites() {
	const theme = useTheme();
	const [favorites, setFavorites] = useState<EmvModel[]>([]);
	const { navigate } = useTypeSafeNavigation();

  useFocusEffect(useCallback(() => {
    (async () => {
			const response = await EmvsRepository.getFavourites();
			setFavorites(response)
		})();
  }, []));

	async function navigateTo(item: EmvModel) {
		navigate("ShowQrCode", {
      id: item?.id,
		  emv: item.value,
		  type: item.type
		})
	}

	return (
		<CustomSafeArea occupyEverything>
			<S.HistoryHeader>
				<S.HistoryHeaderHeader>Favoritos</S.HistoryHeaderHeader>
			</S.HistoryHeader>

      <S.HistoryList>
        {favorites.map((item, index) => (
          <QrCodeItem 
            key={item?.id}
            onPress={() => navigateTo(item)}
            item={item}
            index={index}
          />
        ))}

        {favorites.length === 0 && (
          <S.HistoryNotFoundContainer>
            <AntDesign 
            name="qrcode" 
            size={200} 
            color={theme?.colors?.text} 
          />
          <S.HistoryNotFoundText>
            Sem favoritos
          </S.HistoryNotFoundText>
          </S.HistoryNotFoundContainer>
        )}
      </S.HistoryList>

		</CustomSafeArea>
	);
}
