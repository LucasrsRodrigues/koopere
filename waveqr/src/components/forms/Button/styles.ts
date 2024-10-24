import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  padding: 10px;
  background: ${({ theme }) => theme?.colors?.primary};
  border-radius: 20px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
  font-family: ${({ theme }) => theme?.fonts?.primary_500};
`;