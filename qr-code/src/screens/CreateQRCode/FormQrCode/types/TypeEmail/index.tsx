import React from 'react';

import * as S from './styles';
import { Input } from '@components/forms/Input';

export function TypeEmail() {
  return (
    <S.Container>
      <S.Title>E-mail</S.Title>

      <S.Line>
        <Input placeholder='Insira o endereço de e-mail *' />
      </S.Line>

    </S.Container>
  );
}