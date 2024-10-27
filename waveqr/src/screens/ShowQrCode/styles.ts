import styled from "styled-components/native";

export const ShowQrCodeHeader = styled.View`
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

export const ShowQRCodeBody = styled.View`
  align-items: center;
  padding-top: 20px;
`;

export const QRCodeType = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme?.colors?.primary};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  text-transform: uppercase;
`;


export const QRCodeWrapper = styled.View`
  background: ${({ theme }) => theme?.colors?.white};
  align-items: center;
  justify-content: center;

  padding: 20px;
  border-radius: 15px;

  margin-top: 10px;
`;


export const ShowQRCodeFooter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export const QrCodeOption = styled.View`
  flex-direction: row;
  gap: 50px;
  margin-top: 20px;
`;

export const QrCodeOptionButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background: ${({ theme }) => theme?.colors?.shape};
  border: 1px solid ${({ theme }) => theme?.colors?.primary};
  
  align-items: center;
  justify-content: center;
`;


export const QRCodeEMV = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme?.colors?.text};
  font-family: ${({ theme }) => theme?.fonts?.primary_500};
  text-align: center;
  margin-top: 20px;
`;

export const QRCodeEMVLinkButton = styled.Pressable``;

export const QRCodeEMVLink = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme?.colors?.text};
  font-family: ${({ theme }) => theme?.fonts?.primary_500};

  text-align: center;
  margin-top: 20px;
`;

export const QRCodeEMVLinkUnderline = styled.View`
  width: 100%;
  height: 1px;
  background-color: red;
`;
