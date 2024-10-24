import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";

const TouchableOpacityAnimated = Animated.createAnimatedComponent(TouchableOpacity);


export const HistoryOption = styled(TouchableOpacityAnimated).attrs({
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

export const HistoryOptionTitle = styled.Text.attrs({
  numberOfLines: 1
})`
  color: ${({ theme }) => theme.colors.title};
  font-size: 16px;
  font-family: ${({ theme }) => theme?.fonts?.primary_500};
  max-width: 320px;
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