import React, { useState } from "react";
import { Input } from "@components/forms/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import * as S from "./styles";
import { ControlledInput } from "@components/controlled/ControlledInput";
import { useForm } from "react-hook-form";
import { Button } from "@components/forms/Button";
import type { IGeralSubmitDTO } from "../..";
import { Keyboard } from "@components/Keyboard";

type ITypeEmailProps = {
	onGlobalSubmit: (data: IGeralSubmitDTO) => void;
};

const schema = Yup.object().shape({
	email: Yup.string().email().required(),
});

type FormData = Yup.InferType<typeof schema>;

export function TypeEmail({ onGlobalSubmit }: ITypeEmailProps) {
	const [showButtonSubmit, setShowButtonSubmit] = useState(false);

	const { control, handleSubmit } = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data: FormData) => {
		onGlobalSubmit({
			emv: `mailto:${data?.email}`,
		});
	};

	return (
		<S.Container>
			<Keyboard>
				<S.Title>E-mail</S.Title>

				<S.Line>
					<ControlledInput
						control={control}
						name="email"
						placeholder="Insira o endereço de e-mail *"
						onBlur={() => setShowButtonSubmit(true)}
					/>
				</S.Line>

				{showButtonSubmit && (
					<Button label="Gerar" onPress={handleSubmit(onSubmit)} />
				)}
			</Keyboard>
		</S.Container>
	);
}
