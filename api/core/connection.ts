//dcd32e316ca0dd502589c01ae56b8785
import { Client } from 'https://deno.land/x/mysql/mod.ts';
export const client = await new Client().connect({
  hostname: 'ns996.hostgator.com.br',
  username: 'amazin55_senac',
  password: 'dcd32e316ca0dd502589c01ae56b8785',
  db: 'amazin55_senac_sensor',
});
