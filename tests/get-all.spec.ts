import { test, expect } from '@playwright/test';
import { getAllObjects } from '../src/getAllObjects';

test('GET /objects — получить все объекты', async ({ request }) => {
  const res = await getAllObjects(request);
  expect(res.status()).toBe(200);
  const body = await res.json();
  expect(Array.isArray(body)).toBe(true);
});