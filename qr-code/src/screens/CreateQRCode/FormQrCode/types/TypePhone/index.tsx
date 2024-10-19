import React from 'react';

import * as S from './styles';
import { Input } from '@components/forms/Input';

export function TypePhone() {
  return (
    <S.Container>
      <S.Title>Telefone</S.Title>

      <S.Line>
        <Input placeholder='Digite o número de telefone' />
      </S.Line>

    </S.Container>
  );
}