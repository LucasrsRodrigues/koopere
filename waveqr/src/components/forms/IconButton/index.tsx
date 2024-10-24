import React from 'react';
import type { TouchableOpacityProps } from 'react-native';
import type { SvgProps } from 'react-native-svg';

import * as S from './styles';

interface IIconButtonProps extends TouchableOpacityProps {
  icon: React.FC<SvgProps>;
  type?: "solid" | "outline";
}

export function IconButton({ icon: Icon, type = "outline", ...rest }: IIconButtonProps) {
  return (
    <S.Container
      type={type}
      {...rest}
    >
      <Icon />
    </S.Container>
  );
}