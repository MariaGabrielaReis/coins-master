import styled from "styled-components/native";

export const Title = styled.Text`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  text-align: center;

  font: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.black};
`;

export const Subtitle = styled.Text`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;

  font: ${({ theme }) => theme.fonts.subtitle};
  color: ${({ theme }) => theme.colors.black};
`;

export const Navbar = styled.Text`
  margin-right: 12px;

  font-family: "Poppins";
  font: ${({ theme }) => theme.fonts.navbar};
  color: ${({ theme }) => theme.colors.black};
`;
