import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0px 32px;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const StartButton = styled.View`
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
