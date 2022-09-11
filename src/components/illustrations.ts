import styled from "styled-components/native";

export const Illustration = styled.Image<{ withoutMargin?: boolean }>`
  margin-bottom: ${({ withoutMargin, theme }) =>
    withoutMargin ? "0px" : theme.spacing.xxl};
  width: 100%;
  height: 60%;
`;
