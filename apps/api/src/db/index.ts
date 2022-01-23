import { Pool, Client } from "pg";

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || "5432"),
});

export async function query(query: string, params?: (string | number)[]) {
  try {
    const result = await pool.query(query, params);
    return result.rows;
  } catch (error) {
    console.log('error', error);
  }
}
