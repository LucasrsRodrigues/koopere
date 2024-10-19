import React from 'react';

import * as S from './styles';
import { Input } from '@components/forms/Input';

export function TypeInternet() {
  return (
    <S.Container>
      <S.Title>Local na rede Internet</S.Title>

      <S.Line>
        <Input placeholder='Endereço *' />
      </S.Line>

      <S.WrapperTypes>
        <S.Type>
          <S.TypeText>https://</S.TypeText>
        </S.Type>

        <S.Type>
          <S.TypeText>http://</S.TypeText>
        </S.Type>

        <S.Type>
          <S.TypeText>www</S.TypeText>
        </S.Type>

        <S.Type>
          <S.TypeText>.com</S.TypeText>
        </S.Type>
      </S.WrapperTypes>
    </S.Container>
  );
}