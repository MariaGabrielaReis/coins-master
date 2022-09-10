import styled from "styled-components/native";

export const ButtonBlack = styled.Button`
  text-align: center;

  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 0px;
  background: ${({ theme }) => theme.colors.black};

  color: ${({ theme }) => theme.colors.yellow};
`;

export const ButtonYellow = styled.Button`
  text-align: center;

  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 0px;
  background: ${({ theme }) => theme.colors.yellow};

  color: ${({ theme }) => theme.colors.black};
`;

export const ButtonTransparent = styled.Button`
  text-align: center;

  color: ${({ theme }) => theme.colors.yellow};
`;
