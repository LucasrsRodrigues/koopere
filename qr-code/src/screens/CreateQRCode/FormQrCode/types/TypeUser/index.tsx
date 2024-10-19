import React from 'react';

import * as S from './styles';
import { Input } from '@components/forms/Input';
import { TextArea } from '@components/forms/TextArea';

export function TypeUser() {
  return (
    <S.Container>
      <S.Title>Meu QR</S.Title>

      <S.Line>
        <Input placeholder='Insira o nome *' />
      </S.Line>

      <S.Line>
        <Input placeholder='Digite Empresa' />
      </S.Line>
      <S.Line>
        <Input placeholder='Digite o número de telefone' />
      </S.Line>

      <S.Line>
        <Input placeholder='Insira o endereço' />
      </S.Line>
      <S.Line>
        <Input placeholder='Insira o endereço de e-mail' />
      </S.Line>

      <S.Line>
        <TextArea placeholder='Digite resumo' />
      </S.Line>
    </S.Container>
  );
}