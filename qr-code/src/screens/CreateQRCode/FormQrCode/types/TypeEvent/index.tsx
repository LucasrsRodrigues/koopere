import React from 'react';

import * as S from './styles';
import { Input } from '@components/forms/Input';
import { TextArea } from '@components/forms/TextArea';

export function TypeEvent() {
  return (
    <S.Container>
      <S.Title>Evento</S.Title>

      <S.Line>
        <Input placeholder='Digite o título *' />
      </S.Line>


      <S.Line>
        <Input placeholder='Selecionar data de inicio' />
        <Input placeholder='Selecionar data final' />
      </S.Line>

      <S.Line>
        <Input placeholder='Hora de inicio' />
        <Input placeholder='Fim do tempo' />
      </S.Line>

      <S.Line>
        <Input placeholder='GMT' />
      </S.Line>

      <S.Line>
        <Input placeholder='Digite localização' />
      </S.Line>

      <S.Line>
        <TextArea placeholder='Digite resumo' />
      </S.Line>



    </S.Container>
  );
}