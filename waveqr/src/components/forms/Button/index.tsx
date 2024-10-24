import React from 'react';

import * as S from './styles';
import type { TouchableOpacityProps } from 'react-native';

interface IButtonProps extends TouchableOpacityProps {
  label: string;
}

export function Button({ label, ...rest }: IButtonProps) {
  return (
    <S.Button
      {...rest}
    >
      <S.ButtonText>{label}</S.ButtonText>
    </S.Button>
  );
}