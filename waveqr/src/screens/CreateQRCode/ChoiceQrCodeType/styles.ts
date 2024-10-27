import styled from "styled-components/native";

export const Header = styled.Text`
  font-size: 30px;
  color: ${({ theme }) => theme?.colors?.title};
  text-align: center;
  font-family: ${({ theme }) => theme?.fonts?.primary_500};
`;

export const SessionTitle = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme?.fonts?.primary_500};
`;

export const ListQrCodeOptions = styled.ScrollView.attrs({
  contentContainerStyle: {
    gap: 15,
    paddingBottom: 100
  },
  showsVerticalScrollIndicator: false
})`
  margin-top: 15px;
`;