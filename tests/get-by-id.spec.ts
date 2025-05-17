import { expect } from '@playwright/test';
import { test } from '../fixtures/fixtures';
import { getObjectById } from '../src/getObjectById';

test('GET /objects/:id — через фикстуру', async ({ request, createdObject }) => {
  const response = await getObjectById(request, createdObject.id);
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.id).toBe(createdObject.id);
});