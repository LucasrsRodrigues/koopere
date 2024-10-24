import React, { useState } from "react";
import { useForm } from "react-hook-form";

import * as S from "./styles";
import { ControlledInput } from "@components/controlled/ControlledInput";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@components/forms/Button";
import { Keyboard } from "@components/Keyboard";
import type { IGeralSubmitDTO } from "../..";

const schema = Yup.object().shape({
	address: Yup.string().url().required(),
});

const valuesToAdd = [
	{
		id: "0",
		text: "https://",
	},
	{
		id: "1",
		text: "http://",
	},
	{
		id: "2",
		text: "www",
	},
	{
		id: "3",
		text: ".com",
	},
];

type FormData = Yup.InferType<typeof schema>;

interface ITypeInternetProps {
	onGlobalSubmit: (data: IGeralSubmitDTO) => void;
}

export function TypeInternet({ onGlobalSubmit }: ITypeInternetProps) {
	const [showButtonSubmit, setShowButtonSubmit] = useState(false);

	const { control, setValue, watch, handleSubmit } = useForm({
		resolver: yupResolver(schema),
	});

	const address = watch("address") ?? "";

	function addToInput(value: string) {
		const val = address + value;

		setValue("address", val);
	}

	const onSubmit = (data: FormData) => {
		onGlobalSubmit({
			emv: data?.address,
		});
	};

	return (
		<S.Container>
			<Keyboard>
				<S.Title>Local na rede Internet</S.Title>

				<S.Line>
					<ControlledInput
						control={control}
						name="address"
						placeholder="Endereço *"
						onBlur={() => setShowButtonSubmit(true)}
						keyboardType="url"
					/>
				</S.Line>

				<S.WrapperTypes>
					{valuesToAdd
						.filter((fitem) => !address.includes(fitem.text))
						.map((item) => (
							<S.Type key={item?.id} onPress={() => addToInput(item.text)}>
								<S.TypeText>{item.text}</S.TypeText>
							</S.Type>
						))}
				</S.WrapperTypes>

				{showButtonSubmit && (
					<Button label="Gerar" onPress={handleSubmit(onSubmit)} />
				)}
			</Keyboard>
		</S.Container>
	);
}
