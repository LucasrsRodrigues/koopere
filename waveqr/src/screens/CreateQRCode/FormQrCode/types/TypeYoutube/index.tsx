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
	videoId: Yup.string().optional(),
});

type FormData = Yup.InferType<typeof schema>;

interface ITypeYoutubeProps {
	onGlobalSubmit: (data: IGeralSubmitDTO) => void;
}

export function TypeYoutube({ onGlobalSubmit }: ITypeYoutubeProps) {
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
	const videoId = watch("videoId");

	const onSubmit = (data: FormData) => {
		let emv = "";

		if (data?.link) {
			emv = data?.link;
		}

		if (data?.videoId) {
			emv = `https://youtu.be/${data?.videoId}`;
		}

		onGlobalSubmit({
			emv,
		});
	};

	function showButton() {
		if(link !== undefined && link !== "" || videoId !== undefined && videoId !== "") {
			setShowButtonSubmit(true);
		}
	}

	return (
		<S.Container>
			<Keyboard>
				<S.Title>YouTube</S.Title>

				<S.WrapperIcon>
					<FontAwesome name="youtube-play" size={24} color="white" />
				</S.WrapperIcon>

				<S.ChoiceStepContainer>
					<S.ChoiceStepButton onPress={() => {setStepSelected("link"); setValue("link", "")}}>
						<S.ChoiceStepButtonText>Link</S.ChoiceStepButtonText>

						{stepSelected === "link" && <S.ChoiceStepButtonSelected />}
					</S.ChoiceStepButton>

					<S.ChoiceStepButton onPress={() => {setStepSelected("videoId"); setValue("videoId", "")}}>
						<S.ChoiceStepButtonText>vídeo ID</S.ChoiceStepButtonText>

						{stepSelected === "videoId" && <S.ChoiceStepButtonSelected />}
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

				{stepSelected === "videoId" && (
					<S.Line>
						<ControlledInput
							control={control}
							name="videoId"
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
