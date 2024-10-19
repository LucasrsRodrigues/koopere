import React, { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';


import AntDesign from '@expo/vector-icons/AntDesign';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';

interface IQrCodeTypeCardProps extends TouchableOpacityProps {
  icon: ReactNode;
  label: string;
  type: string;
}

export function QrCodeTypeCard({ icon, label, type, ...rest }: IQrCodeTypeCardProps) {
  const theme = useTheme();
  const { navigate } = useNavigation();

  return (
    <S.Container
      onPress={() => navigate("FormQrCode", {
        type
      })}
      {...rest}
    >
      {icon && icon}

      <S.QrCodeTypeCardText>
        {label}
      </S.QrCodeTypeCardText>

      <AntDesign
        name="arrowright"
        size={24}
        color={theme?.colors?.primary}
      />
    </S.Container>
  );
}