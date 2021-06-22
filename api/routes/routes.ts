import { Router } from "https://deno.land/x/oak/mod.ts";
import { home, pageNotFound, sensorList } from "../controller/apiController.ts";

const router = new Router();

router
  //WEB
  .get("/", home)
  //sensor
  .get("/sensor/list", sensorList)
  //404
  .get("/(.*)", pageNotFound);

export default router;
