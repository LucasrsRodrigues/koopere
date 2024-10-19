import React from 'react';
import type { TouchableOpacityProps } from 'react-native';
import type { SvgProps } from 'react-native-svg';

import * as S from './styles';

interface IIconButtonProps extends TouchableOpacityProps {
  icon: React.FC<SvgProps>;
}

export function IconButton({ icon: Icon, ...rest }: IIconButtonProps) {
  return (
    <S.Container {...rest}>
      <Icon />
    </S.Container>
  );
}