import React from "react";

import * as S from "./styles";
import type { MaskInputProps } from "react-native-mask-input";

export interface IInputMaskProps extends MaskInputProps {}

export function InputMask({ ...rest }: IInputMaskProps) {
	return (
		<S.Container>
			<S.Input {...rest} />
		</S.Container>
	);
}
