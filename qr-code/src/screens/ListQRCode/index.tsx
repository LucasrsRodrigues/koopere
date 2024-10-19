import React, { useState } from 'react';

import { Input } from '@components/forms/Input';

import SearchIcon from "@assets/icons/search-normal.svg";
import ScanIcon from "@assets/icons/scan.svg";
import { CustomSafeArea } from '@components/CustomSafeArea';
import { IconButton } from '@components/forms/IconButton';

import * as S from "./styles";
import { ScanQRCode } from '@components/ScanQRCode';

export function ListQRCode() {
  const [showScanQRCode, setShowScanQRCode] = useState(false);

  return (
    <CustomSafeArea>
      <S.ListQRCodeHeader>
        <Input
          placeholder='Enter Receipt Number'
          leftElement={<SearchIcon />}
        />

        <IconButton
          onPress={() => setShowScanQRCode(true)}
          icon={ScanIcon}
        />
      </S.ListQRCodeHeader>

      <ScanQRCode
        isVisible={showScanQRCode}
        handleClose={() => setShowScanQRCode(false)}
      />

    </CustomSafeArea>
  );
}