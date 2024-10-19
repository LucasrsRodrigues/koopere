import React from 'react';

import * as S from './styles';
import { Input } from '@components/forms/Input';

export function TypeLocation() {
  return (
    <S.Container>
      <S.Title>Localização</S.Title>

      <S.Line>
        <Input placeholder='Digite latitude *' />
      </S.Line>

      <S.Line>
        <Input placeholder='Digite longitude *' />
      </S.Line>

      {/* TODO: Por o mapa aqui */}

    </S.Container>
  );
}