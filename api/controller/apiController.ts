// deno-lint-ignore-file
import { insert, listAll } from "../repository/sensor.ts";

export const home = ({ response }: any) => {
  const res = {
    message: "Welcome to Sensor API",
  };
  response.status = 200;
  response.body = res;
};

export const pageNotFound = ({ response }: any) => {
  const res = {
    message: "This request does not exists.",
  };
  response.status = 404;
  response.body = res;
};

export const sensorList = async ({ response, request }: any) => {
  const { sensor_name } = await request.body().value;
  const sensorList = await listAll({ sensor_name });
  const res = {
    message: "Requisition sucessfull.",
    data: sensorList,
  };
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.status = 200;
  response.body = res;
};

export const insertSensor = async ({ request, response }: any) => {
  const { sensor_name } = await request.body().value;
  const newSensor = await insert(sensor_name);
  const res = {
    message: "Insert sucessfull",
    data: newSensor,
  };
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.status = 200;
  response.body = res;
};
