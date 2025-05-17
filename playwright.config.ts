import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config(); // Загружает переменные из .env

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: process.env.BASE_URL,
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
    },
  },
  reporter: [['list'], ['allure-playwright']], // если используешь Allure
});