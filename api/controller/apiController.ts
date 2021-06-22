// deno-lint-ignore-file
import { listAll } from "../repository/sensor.ts";

export const home = ({ response }: any) => {
  const res = {
    "message": "Bem vindo à API para os sensores!",
  };
  response.status = 200;
  response.body = res;
};

export const pageNotFound = ({ response }: any) => {
  const res = {
    "message": "Esta página não existe!",
  };
  response.status = 404;
  response.body = res;
};

export const sensorList = async ({ response }: any) => {
  const sensorList = await listAll();
  const res = {
    "message": "Dados retornados com sucesso!",
    "dados": sensorList,
  };
  response.status = 200;
  response.body = res;
};
