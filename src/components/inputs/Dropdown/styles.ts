import styled from "styled-components/native";
import DropDownPicker from "react-native-dropdown-picker";

export const Label = styled.Text`
  margin-bottom: ${({ theme }) => theme.spacing.xs}
  font: ${({ theme }) => theme.fonts.text};
`;

export const DropdownContainer = styled(DropDownPicker)<{
  isDisabled: boolean;
}>`
  width: 100%;
  height: 48px;
  padding: 0px 16px;
  margin-bottom: ${({ theme }) => theme.spacing.lg}

  border-radius: ${({ theme }) => theme.borderRadius.md};
  border-width: 0.5px;
  border-color: ${({ theme }) => theme.colors.gray};

  font: ${({ theme }) => theme.fonts.button};
  color: ${({ theme }) => theme.colors.gray};
  background-color: ${({ isDisabled, theme }) =>
    isDisabled ? theme.colors.graySupport : theme.colors.white};
`;

export const SupportText = styled.Text`
  margin-bottom: ${({ theme }) => theme.spacing.xs}
  font: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.gray};
`;
