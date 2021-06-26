import { Application } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import router from "./routes/routes.ts";


const app = new Application();

app.use(
  oakCors({
    origin: "*",
    optionsSuccessStatus: 200,
  }),
);
app.use(router.routes());


addEventListener("fetch", app.fetchEventHandler());