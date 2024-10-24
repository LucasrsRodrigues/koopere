import React, { useState } from "react";

import * as S from "./styles";
import * as Yup from "yup";
import type { IGeralSubmitDTO } from "../..";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ControlledTextArea } from "@components/controlled/ControlledTextArea";
import { Keyboard } from "@components/Keyboard";
import { Button } from "@components/forms/Button";

type ITypeTextProps = {
	onGlobalSubmit: (data: IGeralSubmitDTO) => void;
};

const schema = Yup.object().shape({
	text: Yup.string().required(),
});

type FormData = Yup.InferType<typeof schema>;

export function TypeText({ onGlobalSubmit }: ITypeTextProps) {
  const [showButtonSubmit, setShowButtonSubmit] = useState(false);

	const { control, handleSubmit } = useForm({
		resolver: yupResolver(schema),
	});

  const onSubmit = (data: FormData) => {
		onGlobalSubmit({
			emv: data?.text,
		});
	};

	return (
		<S.Container>
			<Keyboard>
				<S.Title>Texto</S.Title>

				<S.Line>
					<ControlledTextArea
						control={control}
						name="text"
						placeholder="Inserir texto *"
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
