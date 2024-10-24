import React from "react";
import { type IInputProps, Input } from "@components/forms/Input";
import { type Control, Controller, type FieldValues } from "react-hook-form";
import { Select } from "@components/forms/Select";
import type { SelectListProps } from "react-native-dropdown-select-list";

interface IControlledInputProps extends SelectListProps {
	control: Control<FieldValues>;
	name: string;
	data: Array<{ key: string; value: string }>;
}

export function ControlledSelect({
	control,
	name,
	data,
	...rest
}: IControlledInputProps) {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { onChange, onBlur, value } }) => (
				<Select  data={data} {...rest} setSelected={onChange}/>
			)}
		/>
	);
}
