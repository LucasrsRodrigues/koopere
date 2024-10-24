import React from "react";
import { type IInputProps, Input } from "@components/forms/Input";
import { type Control, Controller, type FieldValues } from "react-hook-form";

interface IControlledInputProps extends IInputProps {
	control: Control<FieldValues>;
	name: string;
}

export function ControlledInput({
	control,
	name,
	...rest
}: IControlledInputProps) {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { onChange, onBlur, value } }) => (
				<Input
					onBlur={onBlur}
					onChangeText={onChange}
					value={value}
					{...rest}
					autoCapitalize="none"
					autoComplete="off"
					autoCorrect={false}
				/>
			)}
		/>
	);
}
