import React, { useState } from "react";
import { useForm } from "react-hook-form";

import * as S from "./styles";
import { ControlledInput } from "@components/controlled/ControlledInput";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@components/forms/Button";
import { Keyboard } from "@components/Keyboard";
import type { IGeralSubmitDTO } from "../..";

import FontAwesome from "@expo/vector-icons/FontAwesome";

const schema = Yup.object().shape({
	link: Yup.string().url().optional(),
	username: Yup.string().optional(),
});

type FormData = Yup.InferType<typeof schema>;

interface ITypeTwitterProps {
	onGlobalSubmit: (data: IGeralSubmitDTO) => void;
}

export function TypeTwitter({ onGlobalSubmit }: ITypeTwitterProps) {
	const [showButtonSubmit, setShowButtonSubmit] = useState(false);
	const [stepSelected, setStepSelected] = useState("link");

	const { 
		control, 
		handleSubmit, 
		watch,
		setValue
	} = useForm({
		resolver: yupResolver(schema),
	});

	const link = watch("link");
	const username = watch("username");

	const onSubmit = (data: FormData) => {
		let emv = "";

		if (data?.link) {
			emv = data?.link;
		}

		if (data?.username) {
			emv = `https://www.twitter.com/${data?.username}`;
		}

		onGlobalSubmit({
			emv,
		});
	};

	function showButton() {
		if(link !== undefined && link !== "" || username !== undefined && username !== "") {
			setShowButtonSubmit(true);
		}
	}

	return (
		<S.Container>
			<Keyboard>
				<S.Title>Twitter</S.Title>

				<S.WrapperIcon>
					<FontAwesome name="twitter" size={24} color="white" />
				</S.WrapperIcon>

				<S.ChoiceStepContainer>
					<S.ChoiceStepButton onPress={() => {setStepSelected("link"); setValue("link", "")}}>
						<S.ChoiceStepButtonText>Link</S.ChoiceStepButtonText>

						{stepSelected === "link" && <S.ChoiceStepButtonSelected />}
					</S.ChoiceStepButton>

					<S.ChoiceStepButton onPress={() => {setStepSelected("username"); setValue("username", "")}}>
						<S.ChoiceStepButtonText>Nome do usuário</S.ChoiceStepButtonText>

						{stepSelected === "username" && <S.ChoiceStepButtonSelected />}
					</S.ChoiceStepButton>
				</S.ChoiceStepContainer>

				{stepSelected === "link" && (
					<S.Line>
						<ControlledInput
							control={control}
							name="link"
							placeholder="Digite o link"
							onBlur={showButton}
							keyboardType="url"
						/>
					</S.Line>
				)}

				{stepSelected === "username" && (
					<S.Line>
						<ControlledInput
							control={control}
							name="username"
							placeholder="Insira o nome de usuário"
							onBlur={showButton}
						/>
					</S.Line>
				)}

				{showButtonSubmit && (
					<Button label="Gerar" onPress={handleSubmit(onSubmit)} />
				)}
			</Keyboard>
		</S.Container>
	);
}
