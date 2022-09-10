import styled from "styled-components/native";
import { ButtonProps } from "../ButtonProps";

export const Container = styled.TouchableOpacity<ButtonProps>`
 margin-bottom: ${({ theme }) => theme.spacing.xs}
 
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;

  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 0px;
  background: ${({ isDisabled, theme }) =>
    isDisabled ? theme.colors.graySupport : theme.colors.yellow};
`;

export const Label = styled.Text<{ isDisabled: boolean }>`
  font: ${({ theme }) => theme.fonts.button};
  color: ${({ isDisabled, theme }) =>
    isDisabled ? theme.colors.gray : theme.colors.black};
`;
