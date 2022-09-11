import React from "react";
import { FlatList } from "react-native";

import { Card } from "@components/cards/Card";
import { members } from "@mocks/members";

import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card
            photo={"@assets/images/member-photo-example.png"}
            name={item.name}
            role={item.role}
          />
        )}
      />
    </Container>
  );
}
