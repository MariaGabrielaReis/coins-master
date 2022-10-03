import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  padding: 0px 24px;

  background-color: ${({ theme }) => theme.colors.white};
`;
