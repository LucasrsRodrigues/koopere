import MaskInput from "react-native-mask-input";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  border: 1px solid ${({ theme }) => theme?.colors?.inputBorder};
  border-radius: 10px;

  flex-direction: row;
  align-items: center;
  gap:12px;
`;


export const Input = styled(MaskInput).attrs(({ theme }) => ({
  placeholderTextColor: theme?.colors?.inputPlaceholder
}))`
  flex: 1;
  color: ${({ theme }) => theme.colors.inputText};
  font-size: 12px;
  padding: 14px 16px;
`;