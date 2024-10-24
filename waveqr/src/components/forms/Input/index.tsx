import React, { type ReactNode } from "react";
import type { TextInputProps } from "react-native";

import * as S from "./styles";

export interface IInputProps extends TextInputProps {
	leftElement?: ReactNode;
}

export function Input({ leftElement, ...rest }: IInputProps) {
	return (
		<S.Container>
			{leftElement && leftElement}

			<S.Input {...rest} />
		</S.Container>
	);
}
