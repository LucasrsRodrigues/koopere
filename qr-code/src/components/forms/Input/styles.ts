import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  border: 1px solid ${({ theme }) => theme?.colors?.inputBorder};
  border-radius: 10px;
  padding: 14px 16px;
`;

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme?.colors?.inputPlaceholder
}))`
  color: ${({ theme }) => theme.colors.inputText};
  font-size: 12px;
`;