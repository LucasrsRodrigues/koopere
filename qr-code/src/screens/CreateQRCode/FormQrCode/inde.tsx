import React, { useEffect } from 'react';

import ArrowLeft from "@assets/icons/arrow-left.svg";

import { CustomSafeArea } from '@components/CustomSafeArea';
import { IconButton } from '@components/forms/IconButton';

import * as S from './styles';
import { TypeInternet } from './types/TypeInternet';
import { useNavigation, useRoute } from '@react-navigation/native';

import { TypeText } from './types/TypeText';
import { TypeWifi } from './types/TypeWifi';
import { TypeEmail } from './types/TypeEmail';
import { TypeContact } from './types/TypeContact';
import { TypeEvent } from './types/TypeEvent';
import { TypeLocation } from './types/TypeLocation';
import { TypeCopy } from './types/TypeCopy';
import { TypePhone } from './types/TypePhone';
import { TypeSMS } from './types/TypeSMS';
import { TypeUser } from './types/TypeUser';

const formsType = {
  link: <TypeInternet />,
  text: <TypeText />,
  wifi: <TypeWifi />,
  email: <TypeEmail />,
  contact: <TypeContact />,
  event: <TypeEvent />,
  location: <TypeLocation />,
  copy: <TypeCopy />,
  phone: <TypePhone />,
  sms: <TypeSMS />,
  user: <TypeUser />,
}

export function FormQrCode() {
  const { goBack } = useNavigation();
  const { params } = useRoute();

  return (
    <CustomSafeArea>
      <S.FormQrCodeHeader>
        <IconButton
          icon={ArrowLeft}
          onPress={goBack}
        />

        <S.HeaderTitle>
          Gerar código QR
        </S.HeaderTitle>

      </S.FormQrCodeHeader>

      {formsType[params?.type]}
    </CustomSafeArea>
  );
}