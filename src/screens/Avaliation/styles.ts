import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 32px 24px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const CoinsCount = styled.Text`
  color: black;
  margin-bottom: 48px;
`;

export const Coins = styled.Text`
  color: ${({ theme }) => theme.colors.yellow};
  font-weight: bold;
`;
