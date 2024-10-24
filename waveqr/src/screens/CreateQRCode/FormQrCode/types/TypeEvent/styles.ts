import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  margin-top: 20px;

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

export const Line = styled.View`
  flex-direction: row;
  gap: 10px;
`;