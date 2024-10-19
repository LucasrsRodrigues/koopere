import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background: ${({ theme }) => theme?.colors?.shape};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  gap: 15px;
  border-radius: 10px;
`;

export const QrCodeTypeCardText = styled.Text`
  flex: 1;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme?.fonts?.primary_500};
  text-transform: capitalize;

  shadow-color: #000;
  shadow-offset: {
    width: 0px;
    height: 2px;
  };
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;