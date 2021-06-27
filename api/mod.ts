import { Application } from "https://deno.land/x/oak/mod.ts";
//import router from "./routes/routes.ts";


const app = new Application();
//app.use(router.routes());


addEventListener("fetch", app.fetchEventHandler());
