import WebView from "react-native-webview";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Web = styled(WebView)``;

export const WebViewHeader = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex-direction: row;
  position: relative;
  align-items: center;

  gap: 10px;
  margin-bottom: 10px;
`;

export const HeaderTitle = styled.Text`
  font-size: 30px;
  color: ${({ theme }) => theme?.colors?.title};
  text-align: center;
  font-family: ${({ theme }) => theme?.fonts?.primary_500};
`;