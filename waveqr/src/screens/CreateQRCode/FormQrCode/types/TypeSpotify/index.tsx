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
	singersName: Yup.string().required(),
	songName: Yup.string().required(),
});

type FormData = Yup.InferType<typeof schema>;

interface ITypeSpotifyProps {
	onGlobalSubmit: (data: IGeralSubmitDTO) => void;
}

export function TypeSpotify({ onGlobalSubmit }: ITypeSpotifyProps) {
	const [showButtonSubmit, setShowButtonSubmit] = useState(false);

	const { 
		control, 
		handleSubmit, 
		watch,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const singersName = watch("singersName");
	const songName = watch("songName");

	const onSubmit = (data: FormData) => {
		let emv = "spotify:";

		if (data?.singersName) {
			emv += `search:${data?.singersName}`;
		}

		if (data?.songName) {
			emv += `:${data?.songName}`;
		}

		onGlobalSubmit({
			emv,
		});
	};

	function showButton() {
		if(songName !== undefined && songName !== "" && singersName !== undefined && singersName !== "") {
			setShowButtonSubmit(true);
		}
	}

	return (
		<S.Container>
			<Keyboard>
				<S.Title>Spotify</S.Title>

				<S.WrapperIcon>
					<FontAwesome name="spotify" size={55} color="#1DB954" />
				</S.WrapperIcon>

					<S.Line>
						<ControlledInput
							control={control}
							name="singersName"
							placeholder="Nome do artista"
							onBlur={showButton}
						/>
					</S.Line>

					<S.Line>
						<ControlledInput
							control={control}
							name="songName"
							placeholder="Nome da música"
							onBlur={showButton}
						/>
					</S.Line>

				{showButtonSubmit && (
					<Button label="Gerar" onPress={handleSubmit(onSubmit)} />
				)}
			</Keyboard>
		</S.Container>
	);
}
