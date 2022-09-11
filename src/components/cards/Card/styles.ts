import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  padding: 8px;

  display: flex;
  flex-direction: row;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.graySupport}
  border-radius: ${({ theme }) => theme.borderRadius.md}
`;

export const Avatar = styled.Image`
  width: 72px;
  height: 72px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

export const Content = styled.View`
  margin-left: ${({ theme }) => theme.spacing.md};
`;

export const Name = styled.Text`
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  font: ${({ theme }) => theme.fonts.cardTitle};
  color: ${({ theme }) => theme.colors.black};
`;

export const Role = styled.Text`
  font: ${({ theme }) => theme.fonts.cardSubtitle};
  color: ${({ theme }) => theme.colors.gray};
`;
