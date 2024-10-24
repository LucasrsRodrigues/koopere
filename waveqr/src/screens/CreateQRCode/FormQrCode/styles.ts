import styled from "styled-components/native";

export const Container = styled.View`
  flex:1;
`;

export const FormQrCodeHeader = styled.View`
  flex-direction: row;
  position: relative;
  align-items: center;

  gap: 10px;
`;


export const HeaderTitle = styled.Text`
  font-size: 30px;
  color: ${({ theme }) => theme?.colors?.title};
  text-align: center;
  font-family: ${({ theme }) => theme?.fonts?.primary_500};
`;

