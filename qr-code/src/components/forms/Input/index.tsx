import React from 'react';

import * as S from './styles';
import { TextInputProps } from 'react-native';

interface IInputProps extends TextInputProps {

}

export function Input({ ...rest }: IInputProps) {
  return (
    <S.Container>
      <S.Input  {...rest} />
    </S.Container>
  );
}