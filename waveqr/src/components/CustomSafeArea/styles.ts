import styled, { css } from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context';

interface ISafeAreaContainerProps {
  customPadding: number;
  backgroundColor?: string;
  occupyEverything?: boolean;
  disablePadding?: boolean;
}

export const SafeAreaContainer = styled(SafeAreaView)<ISafeAreaContainerProps>`
  padding-top: ${({ customPadding }) => customPadding}px;
  background-color: ${({ theme, backgroundColor }) => backgroundColor || theme?.colors?.background};
  padding-left: ${({ disablePadding }) => disablePadding ? 0 : 20}px;
  padding-right: ${({ disablePadding }) => disablePadding ? 0 : 20}px;

  ${({ occupyEverything }) => occupyEverything && css`
    flex: 1;
  `}
`;