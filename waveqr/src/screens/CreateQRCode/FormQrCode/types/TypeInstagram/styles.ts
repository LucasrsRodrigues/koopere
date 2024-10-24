import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  margin-top: 20px;

`;

export const Line = styled.View`
  flex-direction: row;
  gap: 10px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme?.colors?.primary};
  font-size: 16px;
  font-family: ${({ theme }) => theme?.fonts?.primary_400};
`;

export const WrapperTypes = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Type = styled.TouchableOpacity`
  background: ${({ theme }) => theme?.colors?.shape};

  padding: 10px;
  border-radius: 10px;
  gap: 10px;
  width: 20%;
`;

export const TypeText = styled.Text`
  color: ${({ theme }) => theme?.colors?.text};
  font-family: ${({ theme }) => theme?.fonts?.primary_400};
  text-align: center;
`;

export const ChoiceStepContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ChoiceStepButton = styled.TouchableOpacity`
  flex: 1;
  text-align: center;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 0;
  gap: 10px;
`;

export const ChoiceStepButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const ChoiceStepButtonSelected = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  height: 1px;
`;

export const WrapperIcon = styled.View`
  height: 50px;
  width: 50px;
  border-radius: 25px;

  align-items: center;
  justify-content: center;

  background-color: #ff6f91;

  align-self: center;
`;