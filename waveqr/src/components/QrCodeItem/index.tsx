import React from "react";
import type { TouchableOpacityProps } from "react-native";

import ArrowRight from "@assets/icons/arrow-right.svg";
import type { EmvModel } from "@backend/database/models/emvModel";
import { useTheme } from "styled-components/native";
import { LinearTransition, SlideInRight, SlideOutLeft } from 'react-native-reanimated';

import * as S from "./styles";

interface IQrCodeItemProps extends TouchableOpacityProps {
  item: EmvModel;
	index: number;
}

const transaction = LinearTransition.springify().delay(200);


export function QrCodeItem({ item, index, ...rest }: IQrCodeItemProps) {
  const theme = useTheme();

	function configTitle(type: string, value: string) {
		switch (type) {
			case "whatsapp":
				return value.split(":")[1];
			case "location":
				return value.split(":")[1];
			case "phone":
				return value.split(":")[1];
			case "contact": {
				const result = value
					?.split("\n")
					?.filter((item) => item?.includes("N:"))
					.filter((item) => item?.startsWith("N:"))[0];

				return result.split(":")[1];
			}
			case "user": {
				const result = value
					?.split(";")
					?.filter((item) => item?.includes("N:"))[0]
					?.split(":N:")[1];

				return result;
			}
			case "email": {
				return value.split(":")[1];
			}
			case "copy": {
				return value.trim();
			}
			case "sms": {
				return value.split(":")[1];
			}
			case "spotify": {
				if (value?.includes(":search")) {
					return `${value?.split(":search")[1].split(":")[2]} - ${value?.split(":search")[1].split(":")[1]}`;
				}

				return value;
			}
			case "wifi": {
				return `SSID:${
					value
						.split("S:")[1]
						.split(";")
						.filter((item) => item !== "")[0]
				}`;
			}
			default:
				return value;
		}
	}

	return (
		<S.HistoryOption
			entering={SlideInRight.delay(index * 100)}
      exiting={SlideOutLeft.delay(100)}
      layout={transaction}
			{...rest}
		>
			<S.HistoryTexts>
				<S.HistoryOptionTitle>
					{configTitle(item?.type, item?.value)}
				</S.HistoryOptionTitle>

				<S.HistoryOptionType>{item?.type}</S.HistoryOptionType>
			</S.HistoryTexts>

			<ArrowRight stroke={theme?.colors?.primary} width={30} height={30} />
		</S.HistoryOption>
	);
}
