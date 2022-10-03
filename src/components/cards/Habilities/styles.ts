import styled from "styled-components/native";

export const Container = styled.View`
  margin: ${({ theme }) => theme.spacing.sm} 0px;
`;

export const HabilitiesContainer = styled.View`
  margin-top: ${({ theme }) => theme.spacing.md};
  padding: 16px 32px;

  border: 1px solid ${({ theme }) => theme.colors.graySupport}
  border-radius: ${({ theme }) => theme.borderRadius.md}
`;

export const InputContainer = styled.View<{ last: boolean }>`
  margin-bottom: ${({ last, theme }) => (last ? "0" : theme.spacing.sm)};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`
  width: 100%;
  margin-left: ${({ theme }) => theme.spacing.xs};

  border: none;
  padding: 0;

  font: ${({ theme }) => theme.fonts.subtitle};
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
`;
