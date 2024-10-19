import React from 'react';
import { TextArea } from '@components/forms/TextArea';

import * as S from './styles';

export function TypeText() {
  return (
    <S.Container>
      <S.Title>Texto</S.Title>

      <S.Line>
        <TextArea placeholder='Inserir texto *' />
      </S.Line>

    </S.Container>
  );
}