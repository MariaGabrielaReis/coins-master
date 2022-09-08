import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.black};
`;

export const Title = styled.Text`
  text-align: center;

  font-size: 24px;
  line-height: 29px;
`;

export const Subtitle = styled.Text`
  text-align: center;

  font-size: 16px;
  line-height: 20px;
`;
