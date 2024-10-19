import React from 'react';

import * as S from './styles';
import { Input } from '@components/forms/Input';

export function TypeContact() {
  return (
    <S.Container>
      <S.Title>Contato</S.Title>

      <S.Line>
        <Input placeholder='Endereço *' />
      </S.Line>
      <S.Line>
        <Input placeholder='Digite a Empresa' />
      </S.Line>
      <S.Line>
        <Input placeholder='Insira o título' />
      </S.Line>
      <S.Line>
        <Input placeholder='Digite o número de telefone' />
      </S.Line>
      <S.Line>
        <Input placeholder='Insira o endereço de e-mail' />
      </S.Line>
      <S.Line>
        <Input placeholder='Insira o endereço' />
      </S.Line>
      <S.Line>
        <Input placeholder='Entrar no site' />
      </S.Line>
      <S.Line>
        <Input placeholder='Digite nota' />
      </S.Line>

    </S.Container>
  );
}