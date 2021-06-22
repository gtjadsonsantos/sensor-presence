// deno-lint-ignore-file
import { client } from "../core/connection.ts";

export async function listAll() {
  try {
    const list = await client.execute("SELECT * FROM dados");
    console.log(list);
    return list.rows;
  } catch (error) {
    console.log(error);
  }
}
