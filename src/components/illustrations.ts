import styled from "styled-components/native";

export const Illustration = styled.Image<{ withoutMargin?: boolean }>`
  margin-bottom: ${({ withoutMargin, theme }) =>
    withoutMargin ? "0px" : theme.spacing.xxl};
  height: 385px;
`;
