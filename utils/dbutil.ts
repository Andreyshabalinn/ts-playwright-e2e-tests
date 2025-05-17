import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config(); // Загрузка переменных из .env

// Пул подключений (можно использовать во всех тестах)
export const db = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 5432),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});


export async function safeQuery(sql: string, params: any[] = []) {
  try {
    return await db.query(sql, params); // вернёт { rows, rowCount, ... }
  } catch (error: any) {
    console.error('Ошибка запроса:', { sql, params, code: error.code, message: error.message });
    throw new Error(`SQL Error: ${error.message}`);
  }
}