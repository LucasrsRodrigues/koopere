import styled from "styled-components/native";

export const Container = styled.View`
  flex:1;
  background-color: ${({ theme }) => theme?.colors?.background};

  align-items: center;

  padding: 20px;
`;

export const Content = styled.View`
  flex:1;
  background-color: ${({ theme }) => theme?.colors?.background};

  align-items: center;
  justify-content: center;
`;

export const PermissionsScreenIconContainer = styled.View`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme?.colors?.primary};
`;

export const PermissionsScreenTitle = styled.Text`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme?.fonts?.primary_600};
`;

export const PermissionsScreenText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  font-family: ${({ theme }) => theme?.fonts?.primary_500};
`;

export const Footer = styled.View`
  width: 100%;

  gap: 20px;
`;

export const ButtonOutline = styled.TouchableOpacity`
  padding: 20px;
  background: ${({ theme }) => theme?.colors?.red};
  border-radius: 50px;
`;

export const Button = styled.TouchableOpacity`
  padding: 20px;
  background: ${({ theme }) => theme?.colors?.primary};
  border-radius: 50px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
  font-family: ${({ theme }) => theme?.fonts?.primary_500};
`;