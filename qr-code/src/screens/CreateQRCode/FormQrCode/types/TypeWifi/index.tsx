import React from 'react';

import * as S from './styles';
import { Input } from '@components/forms/Input';
import { Select } from '@components/forms/Select';

const data = [
  { key: "1", value: "WPA/WPA2" },
  { key: "2", value: "WEP" },
  { key: "3", value: "Sem criptografia" },
];

export function TypeWifi() {
  return (
    <S.Container>
      <S.Title>Local na rede Internet</S.Title>

      <S.Line>
        <Input placeholder='Endereço *' />
      </S.Line>

      <S.Line>
        <Input placeholder='Digite a senha *' />
      </S.Line>

      {/* <S.Line> */}
      <Select
        data={data}
      />
      {/* </S.Line> */}

    </S.Container>
  );
}