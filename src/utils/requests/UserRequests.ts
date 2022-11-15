import api from "@api";

function handleError(error: unknown, navigation: any) {
  console.error(error);
  navigation.navigate("Sorry");
}

export async function createUser(
  name: string,
  team_code: string,
  role: "Dev Team" | "Scrum Master" | "Product Owner",
  navigation: any,
) {
  try {
    const response = await api.post(`users`, {
      name,
      photo: "",
      team_code,
      role,
    });
    return response.data;
  } catch (error) {
    handleError(error, navigation);
  }
}
