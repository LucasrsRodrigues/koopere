import React from 'react';

import * as S from './styles';
import { Input } from '@components/forms/Input';
import { TextArea } from '@components/forms/TextArea';

export function TypeCopy() {
  return (
    <S.Container>
      <S.Title>Cópia da área de transferência</S.Title>

      <S.Line>
        <TextArea placeholder='O texto será auto colado aqui' />
      </S.Line>
    </S.Container>
  );
}