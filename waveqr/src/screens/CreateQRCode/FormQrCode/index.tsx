import React, { useEffect } from 'react';

import ArrowLeft from "@assets/icons/arrow-left.svg";

import { CustomSafeArea } from '@components/CustomSafeArea';
import { IconButton } from '@components/forms/IconButton';

import * as S from './styles';
import { TypeInternet } from './types/TypeInternet';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
  TypeText,
  TypeWifi,
  TypeEmail,
  TypeContact,
  TypeEvent,
  TypeLocation,
  TypeCopy,
  TypePhone,
  TypeSMS,
  TypeUser,
  TypeInstagram,
  TypeFacebook,
  TypeTwitter,
  TypeYoutube,
  TypeSpotify,
  TypeWhatsapp

} from './types';
import EmvsRepository from '@backend/repositories/emvs/Emvs.repositories';
import useTypeSafeNavigation from '@hooks/navigation/useTypeSafeNavigation';

export interface IGeralSubmitDTO {
  emv: string;
}

export function FormQrCode() {
  const { goBack, navigate } = useTypeSafeNavigation();
  const { params } = useRoute();

  async function geralSubmit(data: IGeralSubmitDTO) {
    const response = await EmvsRepository.create({
      type: params?.type,
      value: data.emv
    });

    navigate("ShowQrCode", {
      id: response.id,
      emv: data.emv,
      type: params?.type
    });
  }

  const formsType = {
    link: <TypeInternet onGlobalSubmit={geralSubmit} />,
    text: <TypeText onGlobalSubmit={geralSubmit} />,
    wifi: <TypeWifi onGlobalSubmit={geralSubmit} />,
    email: <TypeEmail onGlobalSubmit={geralSubmit} />,
    contact: <TypeContact onGlobalSubmit={geralSubmit} />,
    event: <TypeEvent onGlobalSubmit={geralSubmit} />,
    location: <TypeLocation onGlobalSubmit={geralSubmit} />,
    copy: <TypeCopy onGlobalSubmit={geralSubmit} />,
    phone: <TypePhone onGlobalSubmit={geralSubmit} />,
    sms: <TypeSMS onGlobalSubmit={geralSubmit} />,
    user: <TypeUser onGlobalSubmit={geralSubmit} />,
    instagram: <TypeInstagram onGlobalSubmit={geralSubmit} />,
    facebook: <TypeFacebook onGlobalSubmit={geralSubmit} />,
    twitter: <TypeTwitter onGlobalSubmit={geralSubmit} />,
    youtube: <TypeYoutube onGlobalSubmit={geralSubmit} />,
    spotify: <TypeSpotify onGlobalSubmit={geralSubmit} />,
    whatsapp: <TypeWhatsapp onGlobalSubmit={geralSubmit} />,
  }

  return (
    <CustomSafeArea occupyEverything>
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