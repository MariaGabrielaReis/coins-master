export type Member = {
  id: string;
  name: string;
  role: string;
  photo?: string;
};

export const members: Member[] = [
  {
    id: "1",
    name: "Maria Gabriela",
    role: "Scrum Master",
  },
  {
    id: "2",
    name: "Thiago Henrique",
    role: "Product Owner",
  },
  {
    id: "3",
    name: "Gabriel Camargo",
    role: "Dev Team",
  },
  {
    id: "4",
    name: "Giovana Thaís",
    role: "Dev Team",
  },
  {
    id: "5",
    name: "João Marcos",
    role: "Dev Team",
  },
];
