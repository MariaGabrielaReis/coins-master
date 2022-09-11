import React from "react";
import { CardProps } from "../CardProps";
import { Container, Avatar, Content, Name, Role } from "./styles";

export function Card({ photo, name, role }: CardProps) {
  return (
    <Container activityOpacity={0.9}>
      <Avatar source={photo} />
      <Content>
        <Name>{name}</Name>
        <Role>{role}</Role>
      </Content>
    </Container>
  );
}
