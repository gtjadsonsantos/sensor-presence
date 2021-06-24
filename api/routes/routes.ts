import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  home,
  insertSensor,
  pageNotFound,
  sensorList,
} from "../controller/apiController.ts";

const router = new Router();

router
  //WEB
  .get("/", home)
  //sensor
  .get("/sensor/:sensor_name", sensorList)
  .post("/sensor/insert", insertSensor)
  //404
  .get("/(.*)", pageNotFound);

export default router;
