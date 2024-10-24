import React, { useState } from "react";

import * as S from "./styles";
import { Input } from "@components/forms/Input";
import { TextArea } from "@components/forms/TextArea";
import * as Yup from "yup";
import type { IGeralSubmitDTO } from "../..";
import { ControlledTextArea } from "@components/controlled/ControlledTextArea";
import { ControlledInputMask } from "@components/controlled/ControlledInputMask";
import { Masks } from "react-native-mask-input";
import { Button } from "@components/forms/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

type ITypeSMSProps = {
	onGlobalSubmit: (data: IGeralSubmitDTO) => void;
};

const schema = Yup.object().shape({
	phone: Yup.string().required(),
	message: Yup.string().optional(),
});

type FormData = Yup.InferType<typeof schema>;

export function TypeSMS({ onGlobalSubmit }: ITypeSMSProps) {
	const [showButtonSubmit, setShowButtonSubmit] = useState(false);

	const { 
    control, 
    handleSubmit 
  } = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data: FormData) => {
    let emv = `smsto:${data?.phone}`;

    if(data.message) {
      emv += `:${data?.message}`;
    }

		onGlobalSubmit({
			emv,
		});
	};

	return (
		<S.Container>
			<S.Title>SMS</S.Title>

			<S.Line>
				<ControlledInputMask
					control={control}
					name="phone"
					placeholder="Digite o número de telefone"
					mask={Masks.BRL_PHONE}
          onBlur={() => setShowButtonSubmit(true)}
				/>
			</S.Line>

			<S.Line>
				<ControlledTextArea
					control={control}
					name="message"
					placeholder="Digite mensagem"
				/>
			</S.Line>

      {
        showButtonSubmit && (
          <Button label="Gerar" onPress={handleSubmit(onSubmit)} />
        )
      }

		</S.Container>
	);
}
