import React from 'react';
import Feather from '@expo/vector-icons/Feather';

import { CustomSafeArea } from '@components/CustomSafeArea';
import { QrCodeTypeCard } from '@components/QrCodeTypeCard';

import * as S from "./styles";

const optionsToCreateQrCode = [
  { icon: "link-2", label: "Local na Rede Internet", type: "link" },
  { icon: "type", label: "Texto", type: "text" },
  { icon: "wifi", label: "Wifi", type: "wifi" },
  { icon: "mail", label: "e-mail", type: "email" },
  { icon: "book", label: "contato", type: "contact" },
  { icon: "calendar", label: "evento", type: "event" },
  { icon: "map-pin", label: "localização", type: "location" },
  { icon: "copy", label: "cópia da area de transferência", type: "copy" },
  { icon: "phone", label: "telefone", type: "phone" },
  { icon: "message-square", label: "sms", type: "sms" },
  { icon: "user", label: "meu QR", type: "user" },
];

const optionsToCreateQRCodeSocial = [
  { icon: "", label: "Instagram", type: "instagram" },
  { icon: "", label: "Facebook", type: "facebook" },
  { icon: "", label: "Whatsapp", type: "whatsapp" },
  { icon: "", label: "Twitter", type: "twitter" },
  { icon: "", label: "Youtube", type: "youtube" },
  { icon: "", label: "Spotify", type: "spotify" },
];

export function ChoiceQrCodeType() {
  return (
    <CustomSafeArea>
      <S.Header>
        Gerar código QR
      </S.Header>

      <S.ListQrCodeOptions>
        <S.SessionTitle>
          QR Codes padrões
        </S.SessionTitle>

        {optionsToCreateQrCode.map(item => (
          <QrCodeTypeCard
            key={item.label}
            type={item?.type}
            icon={<Feather
              name={item?.icon}
              size={24}
              color="white"
            />}
            label={item.label}
          />
        ))}

        <S.SessionTitle>
          QR Codes social
        </S.SessionTitle>

        {optionsToCreateQRCodeSocial.map(item => (
          <QrCodeTypeCard
            key={item.label}
            icon={<Feather
              name={item?.icon}
              size={24}
              color="white"
            />}
            label={item.label}
          />
        ))}
      </S.ListQrCodeOptions>


    </CustomSafeArea>
  );
}