import api from "@api";

function handleError(error: unknown, navigation: any) {
  console.error(error);
  navigation.navigate("Sorry");
}

export async function createTeam(
  name: string,
  classroom: string,
  abilities: string[],
  navigation: any,
) {
  try {
    const response = await api.post(`teams`, {
      name,
      code: name,
      classroom,
      ability1: abilities[0],
      ability2: abilities[1],
      ability3: abilities[2],
      ability4: abilities[3],
      ability5: abilities[4],
      coins: 0,
    });
    return response.data;
  } catch (error) {
    handleError(error, navigation);
  }
}

export async function showTeam(code: string, navigation: any) {
  try {
    const response = await api.get(`teams/${code}`);
    return response.data;
  } catch (error) {
    handleError(error, navigation);
  }
}

export async function deleteTeam(code: string, navigation: any) {
  try {
    await api.delete(`teams/${code}`);
  } catch (error) {
    handleError(error, navigation);
  }
}
