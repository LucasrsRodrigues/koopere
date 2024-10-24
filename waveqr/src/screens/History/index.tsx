import React, { useCallback, useEffect, useState } from "react";

import { CustomSafeArea } from "@components/CustomSafeArea";
import { Input } from "@components/forms/Input";
import ArrowRight from "@assets/icons/arrow-right.svg";

import * as S from "./styles";
import EmvsRepository from "@backend/repositories/emvs/Emvs.repositories";
import { useTheme } from "styled-components/native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import type { EmvModel } from "@backend/database/models/emvModel";
import useTypeSafeNavigation from "@hooks/navigation/useTypeSafeNavigation";
import { QrCodeItem } from "@components/QrCodeItem";

export function History() {
	const theme = useTheme();
	const [histories, setHistories] = useState<EmvModel[]>([]);
	const { navigate } = useTypeSafeNavigation();

  useFocusEffect(useCallback(() => {
    (async () => {
			const response = await EmvsRepository.read();
			setHistories(response)
		})();
  }, []));

	async function navigateTo(item: EmvModel) {
		navigate("ShowQrCode", {
      id: item.id,
		  emv: item.value,
		  type: item.type
		})
	}

  

	return (
		<CustomSafeArea occupyEverything>
			<S.HistoryHeader>
				<S.HistoryHeaderHeader>History</S.HistoryHeaderHeader>
			</S.HistoryHeader>

      <S.HistoryList>
        {histories.map((item, index) => (
          <QrCodeItem 
            key={item.id}
            item={item}
            onPress={() => navigateTo(item)}
						index={index}
          />
        ))}
      </S.HistoryList>

		</CustomSafeArea>
	);
}