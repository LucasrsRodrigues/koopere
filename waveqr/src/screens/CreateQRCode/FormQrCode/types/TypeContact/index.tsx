import React, { useEffect, useState } from "react";

import * as S from "./styles";
import * as Yup from "yup";

import { Input } from "@components/forms/Input";
import type { IGeralSubmitDTO } from "../..";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ControlledInput } from "@components/controlled/ControlledInput";
import { Button } from "@components/forms/Button";
import { Keyboard } from "@components/Keyboard";

type ITypeContactProps = {
	onGlobalSubmit: (data: IGeralSubmitDTO) => void;
};

const urlRegex =
	/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

const schema = Yup.object().shape({
	name: Yup.string().required("Nome é obrigatório"),
	org: Yup.string().optional(),
	phone: Yup.string()
		.matches(/^\+?[1-9]\d{1,14}$/, "Número de telefone inválido")
		.optional(),
	email: Yup.string().email("E-mail inválido").optional(),
	url: Yup.string()
		.matches(urlRegex, "URL inválida") // Validação usando regex
		.optional(),
	address: Yup.string().optional(),
	title: Yup.string().optional(),
	note: Yup.string()
		.max(500, "Nota não pode ter mais de 500 caracteres")
		.optional(),
});

type FormData = Yup.InferType<typeof schema>;

export function TypeContact({ onGlobalSubmit }: ITypeContactProps) {
	const [showButtonSubmit, setShowButtonSubmit] = useState(true);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	function generateVCard({
		name,
		org,
		phone,
		email,
		url,
		address,
		note,
		title,
	}: FormData) {
		let vCard = "BEGIN:VCARD\nVERSION:3.0\n";

		// Campo obrigatório: nome
		if (name) {
			vCard += `N:${name}\n`;
		} else {
			throw new Error("Nome é obrigatório para gerar um vCard.");
		}

		// Campos opcionais
		if (org) {
			vCard += `ORG:${org}\n`;
		}

		if (title) {
			vCard += `TITLE:${title}\n`;
		}

		if (phone) {
			vCard += `TEL:${phone}\n`;
		}
		if (email) {
			vCard += `EMAIL:${email}\n`;
		}
		if (url) {
			vCard += `URL:${url}\n`;
		}
		if (address) {
			vCard += `ADR:${address}\n`;
		}
		if (note) {
			vCard += `NOTE:${note}\n`;
		}

		// Finalizar o vCard
		vCard += "END:VCARD";

		return vCard;
	}

	const onSubmit = (data: FormData) => {
		const vCard = generateVCard(data);

		onGlobalSubmit({
			emv: vCard,
		});
	};

	useEffect(() => {
		console.log(errors);
	}, [errors]);

	return (
		<S.Container>
			<S.Title>Contato</S.Title>
			<Keyboard>
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
						placeholder="Digite a Empresa"
					/>
				</S.Line>

				<S.Line>
					<ControlledInput
						control={control}
						name="title"
						placeholder="Digite o título"
					/>
				</S.Line>

				<S.Line>
					<ControlledInput
						control={control}
						name="phone"
						placeholder="Digite o número de telefone"
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
					<ControlledInput
						control={control}
						name="address"
						placeholder="Insira o endereço"
					/>
				</S.Line>

				<S.Line>
					<ControlledInput
						control={control}
						name="url"
						placeholder="Entrar no site"
					/>
				</S.Line>

				<S.Line>
					<ControlledInput
						control={control}
						name="note"
						placeholder="Digite nota"
					/>
				</S.Line>

				{showButtonSubmit && (
					<Button label="Gerar" onPress={handleSubmit(onSubmit)} />
				)}
			</Keyboard>
		</S.Container>
	);
}
