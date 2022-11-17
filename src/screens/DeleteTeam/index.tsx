import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Container, Content } from "./styles";
import { Title, Subtitle, Illustration, BlackButton } from "@components";

import { deleteTeam } from "@requests/TeamRequests";
import { MainContext } from "@context";
import { setMembers, setTeam, setUser } from "@reducer";

export default function DeleteTeam() {
  const navigation = useNavigation();
  const {
    state: { team },
    dispatch,
  } = useContext(MainContext);
  const [isLoading, setIsLoading] = useState(false);

  function handleDelete() {
    setIsLoading(true);
    deleteTeam(team.code, navigation).then(() => {
      dispatch(setTeam(undefined));
      dispatch(setMembers(undefined));
      dispatch(setUser(undefined));
      setIsLoading(false);
      navigation.navigate("OnBoarding");
    });
  }

  return (
    <Container>
      <Illustration
        source={require("@assets/images/delete-team-illustration.png")}
      />
      <Content>
        <Title>Essa ação é irreversível</Title>
        <Subtitle>Quer mesmo excluir a equipe? </Subtitle>
        <BlackButton
          label={isLoading ? "Aguarde..." : "EXCLUIR"}
          onClick={handleDelete}
        />
      </Content>
    </Container>
  );
}
