import React from 'react';
import CameraSVG from "@assets/icons/camera.svg";

import * as S from './styles';

export function DeviceScreen() {
  return (
    <S.Container>
      <S.Content>
        <S.PermissionsScreenIconContainer>
          <CameraSVG />
        </S.PermissionsScreenIconContainer>

        <S.PermissionsScreenTitle>
          Câmera não encontrada
        </S.PermissionsScreenTitle>

        <S.PermissionsScreenText>
          Tivemos um problema para localizar a camera do seu dispositivo.
        </S.PermissionsScreenText>
      </S.Content>
    </S.Container>
  );
}