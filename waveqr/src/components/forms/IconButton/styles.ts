import styled, { css } from "styled-components/native";

interface IContainerProps {
  type: "outline" | "solid";
}

export const Container = styled.TouchableOpacity<IContainerProps>`
  border: 1px solid ${({ theme }) => theme?.colors?.inputBorder};
  padding: 15px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  ${({ theme, type }) => type === "solid" && css`
    background: ${({ theme }) => theme?.colors?.shape};
  `}
`;