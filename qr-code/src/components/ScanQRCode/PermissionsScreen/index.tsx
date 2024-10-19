import React from 'react';
import CameraSVG from "@assets/icons/camera.svg";

import * as S from './styles';
import { useCameraPermission } from 'react-native-vision-camera';

export function PermissionsScreen() {
  const { requestPermission } = useCameraPermission();

  async function request() {
    await requestPermission();
  }

  return (
    <S.Container>
      <S.Content>
        <S.PermissionsScreenIconContainer>
          <CameraSVG />
        </S.PermissionsScreenIconContainer>

        <S.PermissionsScreenTitle>
          Enable Camera
        </S.PermissionsScreenTitle>
        <S.PermissionsScreenText>
          We'll need this taking photos, acessing
          the camera roll, or recording video.
        </S.PermissionsScreenText>
      </S.Content>

      <S.Footer>
        <S.ButtonOutline>
          <S.ButtonText>Decline</S.ButtonText>
        </S.ButtonOutline>

        <S.Button onPress={request}>
          <S.ButtonText>Enable Camera</S.ButtonText>
        </S.Button>
      </S.Footer>


    </S.Container>
  );
}