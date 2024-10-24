import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background: ${({ theme }) => theme?.colors?.shape};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  gap: 15px;
  border-radius: 10px;
`;

export const QrCodeTypeCardText = styled.Text.attrs({
	style: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
})`
  flex: 1;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme?.fonts?.primary_500};
  text-transform: capitalize;

  
`;
