import React, { type ReactNode } from 'react';
import type { TextInputProps } from 'react-native';

import * as S from './styles';

interface IInputProps extends TextInputProps {
  leftElement?: ReactNode;
}

export function TextArea({ leftElement, ...rest }: IInputProps) {
  return (
    <S.Container>
      {leftElement && leftElement}

      <S.Input
        multiline
        {...rest}
      />
    </S.Container>
  );
}