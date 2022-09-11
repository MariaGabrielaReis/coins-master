import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 16px 24px;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;
