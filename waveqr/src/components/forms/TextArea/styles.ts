import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  border: 1px solid ${({ theme }) => theme?.colors?.inputBorder};
  border-radius: 10px;
  padding: 14px 16px;

  flex-direction: row;
  align-items: center;
  gap:12px;

`;

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme?.colors?.inputPlaceholder,
  styles: {
    textAlignVertical: "top"
  }
}))`
  flex: 1;
  color: ${({ theme }) => theme.colors.inputText};
  font-size: 12px;

  min-height: 100px;

`;