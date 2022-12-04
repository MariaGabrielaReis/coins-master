import styled from "styled-components/native";

export const Container = styled.View`
  margin-right: ${({ theme }) => theme.spacing.md};
  margin-bottom: 48px;
  padding: 16px;

  display: flex;
  flex-direction: row;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.graySupport};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

export const Avatar = styled.Image`
  width: 72px;
  height: 72px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

export const Content = styled.View``;

export const Name = styled.Text`
  margin-bottom: ${({ theme }) => theme.spacing.xs};

  font: ${({ theme }) => theme.fonts.cardTitle};
  color: ${({ theme }) => theme.colors.black};
`;

export const Role = styled.Text`
  font: ${({ theme }) => theme.fonts.cardSubtitle};
  color: ${({ theme }) => theme.colors.gray};
`;

export const AbilitiesContainer = styled.View`
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

export const Ability = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const AbilityValue = styled.Text`
  margin-left: ${({ theme }) => theme.spacing.sm};
  margin-right: ${({ theme }) => theme.spacing.sm};
`;

export const AbilityName = styled.Text`
  margin-left: ${({ theme }) => theme.spacing.md};
  margin-right: ${({ theme }) => theme.spacing.md};
`;

export const FeedbackLabel = styled.Text`
  margin-top: ${({ theme }) => theme.spacing.sm};
  font-weight: 600;
`;

export const Feedback = styled.Text`
  margin-top: ${({ theme }) => theme.spacing.sm};
  height: 80px;
  background-color: lightgray;
  border-radius: 8px;
`;
