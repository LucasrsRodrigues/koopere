import styled from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context';

interface ISafeAreaContainerProps {
  customPadding: number;
  backgroundColor?: string;
}

export const SafeAreaContainer = styled(SafeAreaView) <ISafeAreaContainerProps>`
  flex: 1;
  padding-top: ${({ customPadding }) => customPadding}px;
  background-color: ${({ theme, backgroundColor }) => backgroundColor || theme?.colors?.background};
  padding-left: 20px;
  padding-right: 20px;
`;