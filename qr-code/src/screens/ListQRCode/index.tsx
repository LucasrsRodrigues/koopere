import React from 'react';
import { View, Text } from 'react-native';

import * as S from "./styles";
import { Input } from '../../components/forms/Input';

export function ListQRCode() {
  return (
    <S.Container>
      <Input placeholder='Enter Receipt Number' />
    </S.Container>
  );
}