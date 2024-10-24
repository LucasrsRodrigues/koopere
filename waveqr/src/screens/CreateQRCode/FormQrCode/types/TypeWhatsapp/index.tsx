import React, { useState } from "react";
import { useForm } from "react-hook-form";

import * as S from "./styles";
import { ControlledInput } from "@components/controlled/ControlledInput";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@components/forms/Button";
import { Keyboard } from "@components/Keyboard";
import type { IGeralSubmitDTO } from "../..";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { CountryPicker } from "react-native-country-codes-picker";
import { useTheme } from "styled-components/native";

const schema = Yup.object().shape({
	phoneNumber: Yup.string().required(),
});

type FormData = Yup.InferType<typeof schema>;

interface ITypeWhatsappProps {
	onGlobalSubmit: (data: IGeralSubmitDTO) => void;
}

export function TypeWhatsapp({ onGlobalSubmit }: ITypeWhatsappProps) {
	const [showButtonSubmit, setShowButtonSubmit] = useState(false);
	const [show, setShow] = useState(false);
	const [countryCode, setCountryCode] = useState("+55");

	const theme = useTheme();

	const { control, handleSubmit, watch } = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data: FormData) => {
		onGlobalSubmit({
			emv: `whatsapp://send?${countryCode.split("+")[1]}${data.phoneNumber}`,
		});
	};

	return (
		<S.Container>
			<Keyboard>
				<S.Title>WhatsApp</S.Title>

				<S.WrapperIcon>
					<FontAwesome name="whatsapp" size={24} color="white" />
				</S.WrapperIcon>

				<S.Line>
					<S.InputDDI onPress={() => setShow(true)}>
						<S.InputDDIText>{countryCode}</S.InputDDIText>

						<AntDesign
							name="caretdown"
							size={10}
							color={theme?.colors?.primary}
						/>
					</S.InputDDI>

					<ControlledInput
						control={control}
						name="phoneNumber"
						placeholder="Número de Whatsapp"
						onBlur={() => setShowButtonSubmit(true)}
						keyboardType="decimal-pad"
					/>
				</S.Line>

				{showButtonSubmit && (
					<Button label="Gerar" onPress={handleSubmit(onSubmit)} />
				)}

				<CountryPicker
					show={show}
					pickerButtonOnPress={(item) => {
						setCountryCode(item.dial_code);
						setShow(false);
					}}
					lang="pt"
					enableModalAvoiding={true}
					style={{
						modal: {
							height: 500,
							backgroundColor: theme.colors.shape,
						},
						textInput: {
							backgroundColor: theme.colors.background,
							color: theme.colors.inputText,
						},
						itemsList: {
							backgroundColor: theme.colors.shape,
						},
						countryButtonStyles: {
							backgroundColor: theme.colors.background,
						},
						countryName: {
							color: theme.colors.inputText,
						},
						dialCode: {
							color: theme.colors.inputText,
						},
						line: {
							backgroundColor: theme.colors.inputBorder,
						},
					}}
				/>
			</Keyboard>
		</S.Container>
	);
}
