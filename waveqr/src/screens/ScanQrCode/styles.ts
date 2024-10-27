import styled from "styled-components/native";
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

export const Container = styled.View`
  flex:1;
`;


export const CameraIn = styled.View`
  position: absolute;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: space-between;

  padding: 20px;
`;

export const CameraInHeader = styled.View`
  padding: 20px;
  margin-top: 20px;
`;

export const CameraInHeaderText = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Scan = styled.View`
  width: 200px;
  height: 200px;
  border: 2px solid #fff;
  border-radius: 16px;
`;

export const FooterScan = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0 15px;
  margin-top: 15px;
`;

export const Button = styled.TouchableOpacity``;

export const Flash = styled(MaterialIcons).attrs({
  name: 'flash-on',
})`
  color: ${({ theme }) => theme.colors.white};
  font-size: 25px;
`;

export const GoBack = styled(AntDesign).attrs({
  name: 'close',
})`
  color: ${({ theme }) => theme.colors.white};
  font-size: 25px;
`;
