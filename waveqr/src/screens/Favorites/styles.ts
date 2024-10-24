import styled from "styled-components/native";

export const HistoryHeader = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-bottom: 30px;
`;

export const HistoryHeaderHeader = styled.Text`
  color: ${({ theme }) => theme?.colors?.title};
  font-size: 20px;
  font-family: ${({ theme }) => theme?.fonts?.primary_600};
`;

export const Line = styled.View`
  flex-direction: row;
`;

export const HistoryOption = styled.TouchableOpacity.attrs({
  style: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
})`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme?.colors?.shape};
  padding: 5px 10px;
  border-radius: 10px;
`;

export const HistoryTexts = styled.View`
  gap: 5px;
`;

export const HistoryOptionTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 16px;
  font-family: ${({ theme }) => theme?.fonts?.primary_500};
`;

export const HistoryOptionType = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 12px;
  font-family: ${({ theme }) => theme?.fonts?.primary_500};
`;


export const HistoryList = styled.ScrollView.attrs({
  contentContainerStyle: {
    gap: 10
  }
})`
  margin-top: 20px;
`;

export const HistoryNotFoundContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const HistoryNotFoundText = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme?.colors?.text};
`;