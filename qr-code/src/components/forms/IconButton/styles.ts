import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  border: 1px solid ${({ theme }) => theme?.colors?.inputBorder};
  padding: 15px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;