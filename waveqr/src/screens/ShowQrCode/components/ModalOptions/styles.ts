import styled from "styled-components/native";

export const ModalOptionContainer = styled.View`
  gap: 15px;
  padding: 30px 20px;
`;

export const ModalOptionButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  gap: 10px;
`;

export const ModalOptionButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.secondary_400};
`;