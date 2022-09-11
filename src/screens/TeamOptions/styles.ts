import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 32px 0px;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.View`
  padding: 0px 32px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
