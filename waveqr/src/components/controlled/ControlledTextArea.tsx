import React from "react";
import type { IInputProps } from "@components/forms/Input";
import { type Control, Controller, type FieldValues } from "react-hook-form";
import { TextArea } from "@components/forms/TextArea";

interface IControlledTextAreaProps extends IInputProps {
	control: Control<FieldValues>;
	name: string;
}

export function ControlledTextArea({
	control,
	name,
	...rest
}: IControlledTextAreaProps) {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { onChange, onBlur, value } }) => (
				<TextArea
					onBlur={onBlur}
					onChangeText={onChange}
					value={value}
					{...rest}
				/>
			)}
		/>
	);
}
