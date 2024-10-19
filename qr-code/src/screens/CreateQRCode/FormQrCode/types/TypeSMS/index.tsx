import React from 'react';

import * as S from './styles';
import { Input } from '@components/forms/Input';
import { TextArea } from '@components/forms/TextArea';

export function TypeSMS() {
  return (
    <S.Container>
      <S.Title>SMS</S.Title>

      <S.Line>
        <Input placeholder='Digite o número de telefone' />
      </S.Line>

      <S.Line>
        <TextArea placeholder='Digite mensagem' />
      </S.Line>

    </S.Container>
  );
}