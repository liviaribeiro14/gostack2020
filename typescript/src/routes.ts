import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: "Pessoa",
    email: "pessoa@teste.com.br",
    password: "123456",
    techs: [
      "Node",
      "React",
      "ReactNative",
      { title: "JavaScript", experience: 100 },
      { title: "DotNet", experience: 100 },
    ],
  });

  return response.json({ message: "Hello Word" });
}
