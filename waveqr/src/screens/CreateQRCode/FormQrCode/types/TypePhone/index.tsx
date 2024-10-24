import React, { useState } from "react";

import * as S from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import type { IGeralSubmitDTO } from "../..";
import { ControlledInputMask } from "@components/controlled/ControlledInputMask";
import { Masks } from "react-native-mask-input";
import { Keyboard } from "@components/Keyboard";
import { Button } from "@components/forms/Button";

type ITypePhoneProps = {
	onGlobalSubmit: (data: IGeralSubmitDTO) => void;
};

const schema = Yup.object().shape({
	phone: Yup.string().required(),
});

type FormData = Yup.InferType<typeof schema>;

export function TypePhone({ onGlobalSubmit }: ITypePhoneProps) {
	const [showButtonSubmit, setShowButtonSubmit] = useState(false);

	const { control, handleSubmit } = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data: FormData) => {
		onGlobalSubmit({
			emv: `tel:${data?.phone}`,
		});
	};

	return (
		<S.Container>
			<Keyboard>
				<S.Title>Telefone</S.Title>

				<S.Line>
					<ControlledInputMask
						control={control}
						name="phone"
						placeholder="Digite o número de telefone"
						mask={Masks.BRL_PHONE}
            onBlur={() => setShowButtonSubmit(true)}
					/>
				</S.Line>

				{showButtonSubmit && (
					<Button 
            label="Gerar" 
            onPress={handleSubmit(onSubmit)} 
          />
				)}
			</Keyboard>
		</S.Container>
	);
}
