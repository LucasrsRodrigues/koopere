import React from "react";
import { type IInputProps, Input } from "@components/forms/Input";
import { type Control, Controller, type FieldValues } from "react-hook-form";
import { type IInputMaskProps, InputMask } from "@components/forms/InputMask";

interface IControlledInputMaskProps extends IInputMaskProps {
	control: Control<FieldValues>;
	name: string;
}

export function ControlledInputMask({
	control,
	name,
	...rest
}: IControlledInputMaskProps) {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { onChange, onBlur, value } }) => (
				<InputMask
					value={value}
					onChangeText={(_, unmasked) => {
						onChange(unmasked);
					}}
					onBlur={onBlur}
					{...rest}
				/>
			)}
		/>
	);
}
