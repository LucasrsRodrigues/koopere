import React, { useEffect, useState } from "react";

import * as S from "./styles";
import { Input } from "@components/forms/Input";
import { Select } from "@components/forms/Select";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const data = [
	{ key: "1", value: "WPA/WPA2" },
	{ key: "2", value: "WEP" },
	{ key: "3", value: "Sem criptografia" },
];
import * as Yup from "yup";
import { ControlledInput } from "@components/controlled/ControlledInput";
import { ControlledSelect } from "@components/controlled/ControlledSelect";
import { Button } from "@components/forms/Button";
import type { IGeralSubmitDTO } from "../..";

const schema = Yup.object().shape({
	ssid: Yup.string().required(),
	encryption: Yup.string().required(),
	password: Yup.string().required(),
});

type FormData = Yup.InferType<typeof schema>;

type ITypeWifiProps = {
	onGlobalSubmit: (data: IGeralSubmitDTO) => void;
};

export function TypeWifi({ onGlobalSubmit }: ITypeWifiProps) {
	const { control, handleSubmit, watch } = useForm({
		resolver: yupResolver(schema),
	});

	const ssid = watch("ssid");
	const encryption = watch("encryption");
	const password = watch("password");

	const onSubmit = (data: FormData) => {
    const ssidFormated = data.ssid === "WPA/WPA2" ? "WPA" : data.ssid;

		onGlobalSubmit({
			emv: `WIFI:T:${data.encryption};S:${ssidFormated};P:${data.password};;`,
		});
	};

	return (
		<S.Container>
			<S.Title>Local na rede Internet</S.Title>

			<S.Line>
				<ControlledInput
					control={control}
					name="ssid"
					placeholder="Insira o nome SSID / de rede *"
				/>
			</S.Line>

			<S.Line>
				<ControlledInput
					control={control}
					name="password"
					placeholder="Digite a senha *"
          secureTextEntry
				/>
			</S.Line>

			<ControlledSelect name="encryption" data={data} control={control} />

			{!!ssid && !!encryption && !!password && (
				<Button label="Gerar" onPress={handleSubmit(onSubmit)} />
			)}

		</S.Container>
	);
}
