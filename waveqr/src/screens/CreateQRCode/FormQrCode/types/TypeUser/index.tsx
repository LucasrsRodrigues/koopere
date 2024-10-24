import React, { useEffect, useState } from "react";

import * as S from "./styles";
import { Input } from "@components/forms/Input";
import { TextArea } from "@components/forms/TextArea";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import type { IGeralSubmitDTO } from "../..";
import { Button } from "@components/forms/Button";
import { ControlledInput } from "@components/controlled/ControlledInput";
import { ControlledInputMask } from "@components/controlled/ControlledInputMask";
import { Mask } from "react-native-svg";
import { Masks } from "react-native-mask-input";
import { ControlledTextArea } from "@components/controlled/ControlledTextArea";
import { Keyboard } from "@components/Keyboard";

type ITypeUserProps = {
	onGlobalSubmit: (data: IGeralSubmitDTO) => void;
};

const schema = Yup.object().shape({
	name: Yup.string().required(),
	org: Yup.string().optional(),
	tel: Yup.string().optional(),
	adr: Yup.string().optional(),
	email: Yup.string().email().optional(),
	note: Yup.string().optional(),
});

type FormData = Yup.InferType<typeof schema>;

export function TypeUser({ onGlobalSubmit }: ITypeUserProps) {
	const [showButtonSubmit, setShowButtonSubmit] = useState(false);

	const { 
    control, 
    handleSubmit,
    formState: { errors } 
  } = useForm({
		resolver: yupResolver(schema),
	});

	function generateVCard({ adr, email, name, note, org, tel }: FormData) {
		let mercandString = "Mercand:";

		if (name) {
			mercandString += `N:${name};`;
		}

		if (org) {
			mercandString += `ORG:${org};`;
		}

		if (tel) {
			mercandString += `TEL:${tel};`;
		}

		if (email) {
			mercandString += `EMAIL:${email};`;
		}

		if (adr) {
			mercandString += `ADR:${adr};`;
		}

		if (note) {
			mercandString += `NOTE:${note};`;
		}

		mercandString += ";";

		return mercandString;
	}

	const onSubmit = (data: FormData) => {
		const emv = generateVCard(data);

		onGlobalSubmit({
			emv,
		});
	};

	useEffect(() => {
		console.log(errors);
	}, [errors]);

	return (
		<S.Container>
			<Keyboard>
				<S.Title>Meu QR</S.Title>

				<S.Line>
					<ControlledInput
						control={control}
						name="name"
						placeholder="Insira o nome *"
					/>
				</S.Line>

				<S.Line>
					<ControlledInput
						control={control}
						name="org"
						placeholder="Digite Empresa"
					/>
				</S.Line>

				<S.Line>
					<ControlledInputMask
						control={control}
						name="tel"
						placeholder="Digite o número de telefone"
						mask={Masks.BRL_PHONE}
					/>
				</S.Line>

				<S.Line>
					<ControlledInput
						control={control}
						name="adr"
						placeholder="Insira o endereço"
					/>
				</S.Line>

				<S.Line>
					<ControlledInput
						control={control}
						name="email"
						placeholder="Insira o endereço de e-mail"
					/>
				</S.Line>

				<S.Line>
					<ControlledTextArea
						control={control}
						name="note"
						placeholder="Digite resumo"
					/>
				</S.Line>

				<Button label="Gerar" onPress={handleSubmit(onSubmit)} />
			</Keyboard>
		</S.Container>
	);
}
