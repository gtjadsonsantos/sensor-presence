import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import router from "./routes/routes.ts";

const HOST = config().HOST ?? "127.0.0.1";
const PORT = config().PORT ?? "8085";

const app = new Application();

app.use(
  oakCors({
    origin: "*",
    optionsSuccessStatus: 200,
  }),
);
app.use(router.routes());

console.log(`Deno is running: ${HOST}:${PORT}`);
await app.listen({ port: Number(PORT)});
