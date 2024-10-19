import React, { ReactNode } from 'react';
import { TextInputProps } from 'react-native';
import { SvgProps } from 'react-native-svg';

import * as S from './styles';

interface IInputProps extends TextInputProps {
  leftElement?: ReactNode;
}

export function Input({ leftElement, ...rest }: IInputProps) {
  return (
    <S.Container>
      {leftElement && leftElement}

      <S.Input  {...rest} />
    </S.Container>
  );
}