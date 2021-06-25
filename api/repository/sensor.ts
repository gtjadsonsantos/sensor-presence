// deno-lint-ignore-file
import { client } from "../core/connection.ts";

interface SensorListParams {
  sensor_name: string;
}

export async function listAllSensor() {
  try {
    let query = "SELECT * FROM dados ORDER BY id DESC";
    return (await client.execute(query)).rows;
  } catch (error) {
    console.log(error);
  }
}

export async function listAll(params: SensorListParams) {
  try {
    let query = "SELECT * FROM dados";

    if (params.sensor_name !== null) {
      query += " WHERE sensor_name LIKE ?";
      query += " ORDER BY id DESC";
      return (await client.execute(query, ["%" + params.sensor_name + "%"]))
        .rows;
    }

    return (await client.execute(query)).rows;
  } catch (error) {
    console.log(error);
  }
}

export async function insert(sensor_name: string) {
  try {
    const insertSensor = await client.execute(
      "INSERT INTO dados (sensor_name) VALUES (?)",
      [sensor_name],
    );
    return insertSensor;
  } catch (error) {
    console.log(error);
  }
}
