import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 64px 32px;
  justify-content: flex-end;
  align-items: center;
`;

export const StartButton = styled.View`
  margin-top: ${({ theme }) => theme.spacing.xl};
  display: flex;
  justify-content: center;
  align-items: center;

  width: 56px;
  height: 56px;

  border-radius: 32px;
  border: 0px;
  background: ${({ theme }) => theme.colors.yellow};

  color: ${({ theme }) => theme.colors.black};
`;
