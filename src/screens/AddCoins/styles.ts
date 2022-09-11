import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 16px 24px;

  background-color: ${({ theme }) => theme.colors.white};
`;
