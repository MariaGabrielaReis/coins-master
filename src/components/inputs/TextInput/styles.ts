import styled from "styled-components/native";

export const Container = styled.View<{ hasMarginRight: boolean }>`
  display: flex;
  flex-direction: column;
  ${({ hasMarginRight }) => hasMarginRight && "width:60%"};

  margin-right: ${({ hasMarginRight, theme }) =>
    hasMarginRight ? theme.spacing.xs : "0px"};
`;

export const Input = styled.TextInput<{
  isDisabled: boolean;
  hasSupportText: boolean;
}>`
  width: 100%;
  height: 48px;
  padding: 0px 16px;
  margin-bottom: ${({ hasSupportText, theme }) =>
    hasSupportText ? theme.spacing.xs : theme.spacing.sm}

  border-radius: ${({ theme }) => theme.borderRadius.md};
  border-width: 0.5px;
  border-color: ${({ isDisabled, theme }) =>
    isDisabled ? theme.colors.graySupport : theme.colors.gray};

  font: ${({ theme }) => theme.fonts.button};
  color: ${({ isDisabled, theme }) =>
    isDisabled ? theme.colors.gray : theme.colors.black};
  background-color: ${({ isDisabled, theme }) =>
    isDisabled ? theme.colors.graySupport : theme.colors.white};
`;

export const SupportText = styled.Text`
  margin-bottom: ${({ theme }) => theme.spacing.xs}
  font: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.gray};
`;
