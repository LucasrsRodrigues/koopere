import React, { useRef } from 'react';
import { Modal, StyleSheet } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission, useCodeScanner } from 'react-native-vision-camera';
import { PermissionsScreen } from './PermissionsScreen';
import * as S from "./styles";

interface IScanQRCodeProps {
  isVisible: boolean;
  handleClose: () => void;
}

export function ScanQRCode({ isVisible, handleClose }: IScanQRCodeProps) {
  const cameraRef = useRef<Camera>(null);
  const device = useCameraDevice('back');
  const { hasPermission, requestPermission } = useCameraPermission();


  // if (!hasPermission) return <PermissionsScreen />;
  // if (device == null) return null;

  // useEffect(() => {
  //   console.log(device);
  // }, []);

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (codes) => {

    }
  })

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
    >
      <S.ModalOverlay>
        {(!hasPermission) && <PermissionsScreen />}
        <S.ModalContent>
          <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            resizeMode="cover"
            codeScanner={codeScanner}
          />

          <S.CameraIn>
            <S.CameraInHeader>
              <S.CameraInHeaderText>
                Scan Qr Code
              </S.CameraInHeaderText>
            </S.CameraInHeader>

            <S.Scan />

            <S.FooterScan>
              <S.Button onPress={handleClose}>
                <S.GoBack />
              </S.Button>

              <S.Button onPress={() => { }}>
                <S.Flash />
              </S.Button>
            </S.FooterScan>

          </S.CameraIn>
        </S.ModalContent>
      </S.ModalOverlay>
    </Modal>
  );
}